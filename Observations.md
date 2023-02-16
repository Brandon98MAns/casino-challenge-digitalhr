# casino-challenge-digitalhr
-Sign up automation process and smoke test example for dark mode label. 

You will see 2 [cy.js] files on E2E folder. One is for signup process and the other one is for test the functionality of the dark mode label. 
As you can see by running "npm run signup" on the project terminal, the steps are passed succesfully untill the captcha is displayed. 

I don't understand if the goal here is to develop the way to pass over the captcha but, on my experience, captchas validations are never active on testing enviroments because the main objective by using them is to block all automation bots. My opinion is that If the Sign Up process has a captcha validation, we can proceed to tested manually. Because all the configuration to build the functionality for passing over it, it will take a lot of time and you meaby will break to aplication code on some point. Also, in same cases, you will need to pay a software for disable it.

Hope that with this comments you understand my point. 
