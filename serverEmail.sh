!/bin/bash

EMAIL="r.geethaprema@velansolutions.com,vharikrishna@velansolutions.com"
MAILSUBJECT="["`hostname`"] - Site not responding, Apache2 restarted"
SITE="https://"`hostname`".org"
NOW=$(date +"%D %H:%M:%S")
MAILBODY="This is an automated email to notify you that apache2 service is restarted as "`hostname`" site was not responding at "`date`" with error code: "
IP_ADDRESS="IP: 159.223.153.67"
USER_NAME="UserName: root"
CLOUD="Cloud: DigitalOcean"

ACODE=$(curl -s -o /dev/null -w "%{http_code}" https://`hostname`.org)

if [ "${ACODE}" -ne "200" ]
then
  echo "$NOW ERROR CODE: $ACODE Restarting Apache2"
  sudo service apache2 restart
  sleep 15
  printf "$MAILBODY $ACODE \n\n $SITE \n $IP_ADDRESS \n $USER_NAME \n $CLOUD" | mail -s "${MAILSUBJECT}" "${EMAIL}"
fi
