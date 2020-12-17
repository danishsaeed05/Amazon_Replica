# Amazon Replica

##### Official website link hosted in Netlify.
- https://amazon-replica.netlify.app

[![Netlify Status](https://api.netlify.com/api/v1/badges/fa19f330-b17b-4799-a38f-ae7e6def3da8/deploy-status)](https://app.netlify.com/sites/amazon-replica/deploys)

## This project is based on amazon's wesbite. 
### The following tools are used in this project:
- React JS
- Express JS
- Stripe
- moment
- react currency fomatter
- material UI/Icons
- axios
- cors
- dotenv
- firebase (firestore & cloud functions)

## Instructions:
#### To run the application: 
##### Launch Server API:
- Navigate to ***functions*** folder first
- Make sure to have ***.env*** file that contains a variable ***SECRET_KEY = myKey*** where **myKey** is your private key from stripe
- ***firebase init*** and select ***Functions*** option and then upload the functions to firebase.
- But in our case, we will only run it locally through firebase emulator through ***firebase emulators:start***

##### Launch/host website:
- navigate to the root directory
- build the react project first by typing ***npm run build*** which will give us an optimized version of our website
- type ***firebase init***
- Choose ***Hosting*** option
- Select the project/root directory you want to host 
- select ***build*** as public directory
- Type ***y*** to use index.html as root url
- But its better to run it locally first through ***npm start***

## Testing Account
#### Use testing account or simply click create account through login page, except create create account button
- Email: rock@gmail.com
- Password: rock123

Please Note that making payment would NOT work since I have NOT hosted the API due to billing fees that firebase charges. But feel free to host the functions API locally and it the payment will go through in real time to your stripe account. 