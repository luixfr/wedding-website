# To Send email when application server doesn't respond
**Login to gmail from which email to be sent to set the password**

1. Login gmail -> Goto Manage accounts -> Security -> in "How you sign in to Google" section Click "2 Step Verification" -> click App Passwords -> Select app as Other and enter a name -> copy the password without space (Note: This UI varies depending upon the Google updtes)
2. Install mail utility
> `sudo apt-get install mailutils` 
3. To check if postfix is installed (Mail Transfer Agent)
>  `systemctl status postfix` --> o/p: active
4. If postfix is not installed  
> `sudo apt install postfix` 
5. Configure postfix (Refer: https://www.linode.com/docs/guides/postfix-smtp-debian7/)
> `sudo dpkg-reconfigure postfix` 
6. To Check the status of postfix
>  `systemctl status postfix`
7. All the details are entered into main.cf after postfix configuration
> `vim /etc/postfix/main.cf`
8. Create a directory in /etc/postfix as sasl
> `cd /etc/postfix/sasl`
9. Create a sasl_passwd file (create this file manually in /etc/postfix/sasl) 
> `cat > sasl_passwd`
10.  Write the gmail password (from step 1) in sasl_password 
> `vim sasl_passwd` and enter this `[smtp.gmail.com]:587 username:password` in the file
11. Create a Hash database sasl_passwd.db file in the /etc/postfix/sasl directory using the postmap command
> `sudo postmap /etc/postfix/sasl/sasl_passwd`
12. Run the following commands to change the file permissions for sasl_passwd and sasl_passwd.db:

````
  sudo chown root:root /etc/postfix/sasl/sasl_passwd /etc/postfix/sasl/sasl_passwd.db
  sudo chmod 0600 /etc/postfix/sasl/sasl_passwd /etc/postfix/sasl/sasl_passwd.db
````

13. The final edit in the /etc/postfix/main.cf file is related to the settings needed for Postfix to use the external SMTP server. The settings instruct Postfix to deliver emails via a relay host, which is an external SMTP server and mention sasl files here. Else it uses default as root@hostname
> `[smtp.gmail.com]:587` 
14. Restart postfix
> `systemctl restart postfix`
15. By default, the SMTP protocol runs at port number 25. Verify that TCP port 25 is in a listening state on 127.0.0.1. Use the netstat command:
> `sudo netstat -tulpn | grep :25` 
  (if netstat is not installed use `sudo apt install net-tools`)
16. To check if email is working 
> echo "test body" | mail -s 'test subject' <recipient_emailAddress>
17. Log files path
> `tail -f /var/log/syslog`

## To send email from different inbox : (Reference: https://gist.github.com/zmwangx/2c56aa32be68daf48c2f)

1. Create a file sender_relay in '/etc/postfix/sasl/' folder 
> `vim /etc/postfix/sasl/sender_relay`
2. Add the following sender email address in this file
> `<from_email_address> [smtp.gmail.com]:587`
3. Create/open sasl_passwd file from '/etc/postfix/sasl' folder
> `vim /etc/postfix/sasl/sasl_passwd`
4. Add the following key and value parameters and the default email sender email address
````
    <!-- per-sender authentication -->
    account1@gmail.com account1@gmail.com:passwd1
    account2@gmail.com account2@gmail.com:passwd2
    <!-- default relayhost -->
    [smtp.gmail.com]:587 default_account@gmail.com:default_passwd
````
5. Change the file permission
  > `sudo chmod 600 /etc/postfix/sasl/sasl_passwd`
6. Run postmap command
 >  `postmap /etc/postfix/sasl/sasl_passwd /etc/postfix/sasl/sender_relay`
7. In the configuration file main.cf enter the following 
> `smtp_sender_dependent_authentication = yes`
8. Reload the configuration 
 > `postfix reload`
9. To test the configuration use one of the new sender email ID 
> `echo "test body" | mail -s 'test subject' -a 'From:first_name last_name<account1@gmail.com>' recipient_email_ID`
10. To test sending enter multiple recipent 
> `echo "test body" | mail -s 'test subject' -a 'From:first_name last_name<account1@gmail.com>' recipient_email_1, recipient_email_2`



## Cronjob to run every 15mins to check the server and restart it when the status is not 200
**serverEmail.sh --> this file has code to check whether the server status is 200, if not restart the app server and send email**

1. Change the persmission of the serverEmail.sh file
> `chmod 775 serverEmail.sh`
2. Use crontab -e and choose anyone editor to include the crontable
> `*/15 * * * * /home/deploy/serverEmail.sh>>/home/deploy/sitepoll.log 2>&1`
3. To list the available cron jobs use
> `crontab -l`