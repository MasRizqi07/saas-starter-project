import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const getStripeCustomerId = async (userId: string, email: string) => {
  // Check if customer already exists in Stripe
  const customers = await stripe.customers.list({ email })
  
  if (customers.data.length > 0) {
    return customers.data[0].id
  }
  
  // Create new customer
  const customer = await stripe.customers.create({
    email,
    metadata: { userId },
  })
  
  return customer.id
}
