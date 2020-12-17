# Amazon 

## This project is based on amazon's wesbite. 
### The following tools are used in this project:
- React JS
- Express JS
- Stripe
- firebase (firestore & cloud functions)

# Project still in progress

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


##### Official website link hosted in Netlify.
- https://amazon-replica.netlify.app

#### Use testing account or simply click create account through login page, except create create account button
- Email: test@test.com
- Password: test123

Please Note that making payment would NOT work since I have NOT hosted the API due to billing fees that firebase charges. But feel free to host the functions API locally and it the payment will go through in real time to your stripe account. 