# Generate a Trusted SSL Certificate

This repository contains a script that will generate a trusted ssl certificate which can be used for local software development.

```
git clone https://github.com/RubenVermeulen/generate-trusted-ssl-certificate.git
cd <PATH_TO_REPO_FOLDER>/generate-trusted-ssl-certificate
bash generate.sh
```

## Configuration

You can adjust the `[dn]` part of the `openssl-custom.cnf` file to whatever you prefer.

```
[dn]
C = <COUNTRY>
ST = <STATE>
L = <LOCALITY / CITY>
O = <ORGANIZATION>
OU = <ORGANIZATION_UNIT>
emailAddress = <EMAIL_ADDRESS>
CN = <HOSTNAME / IP_ADDRESS>
``` 

# Directions

```
generate
```

It will create a server.key & server.crt file


## For OS X

1.Double click on the certificate (server.crt)

2.Select your desired keychain (login should suffice)

3.Add the certificate

4.Open Keychain Access if it isn’t already open

5.Select the keychain you chose earlier

6.You should see the certificate localhost

7.Double click on the certificate

8.Expand Trust

9.Select the option Always Trust in When using this certificate

10.Close the certificate window

## Windows 10

1.Double click on the certificate (server.crt)

2.Click on the button “Install Certificate …”

3.Select whether you want to store it on user level or on machine level

4.Click “Next”

5.Select “Place all certificates in the following store”

6.Click “Browse”

7.Select “Trusted Root Certification Authorities”

8.Click “Ok”

9.Click “Next”

10.Click “Finish”

11.If you get a prompt, click “Yes”

The certificate is now installed.

Now store the certificate in ssl directory(Where src, e2e dir are there)(preferred way)

Now use the inline command to add ssl key and certificate or add to angular.json/angular-cli.json

You will not see any "not secure",and it will show "secure" if you click on lock icon adjacent to address bar

But, if you will run the application in other's laptop it will show "not secure" as they have not installed the certificate(trusted)

## [How to make Chrome trust Windows system root CA certificate?](https://superuser.com/questions/1315820/how-to-make-chrome-trust-windows-system-root-ca-certificate)

Chrome uses the Certificate Store on Windows for validating certificates. If Chrome is complaining, then the certificate is not installed on Trusted Root Certificates on your local machine or the certificate's CN (Common Name) is not matching with the domain name you are accessing.

In order to install the certificate on trusted roots,

Click on the red alert icon on the top left of the address bar, form drop down menu select certificate.

Then navigate to the detail tab on the certificate window, from bottom right click on Copy to File, Export the certificate in DER encoding set the name of the certificate and Finish.

Then open certmgr.msc expend the Trusted Root Certificate Authorities tree.

Right click on Certificate from the drop down select all task then click import select your certificate chose Place all certificates in the following store and proceed to finish.

Relaunch Chrome.