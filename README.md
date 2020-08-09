Created this project as a way to practice what I've learned in my 3 months of watching tutorials

I've now reached a point where I'm comfortable with React lifecycles and the state / props are managed, given that.

I realized that this project is not small enough to just handle state by passing it down to props. Which is why I'm transferring to redux. another reason is I'm now going to implement routing, which I will need to render only my homepage on one route.

with this, I made a new branch where I added redux.

Implement routing for checkout page and cart

dependencies used:
react-responsive-carousel
react-step-progress-bar
formik

Now, I will add authentication to the page where users must be signed in, in order to proceed to payment, they can view thier cart but will not be able to purchase them. 



Once they proceeded with their payment they will be redirected to either sign in/up. After signing in/up, they will be redirected to the checkout page with all the items still in their cart.

I will use formik and yup for the front end auth.
for authentication, I've chosen firebase as the server.