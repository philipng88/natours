/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";

export const bookTour = async tourId => {
    const stripe = Stripe('pk_test_CLU0DJV2p55UNLWEUc2JIiqr002Vp5gaWK');
    try {
        const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
        await stripe.redirectToCheckout({ sessionId: session.data.session.id })

    } catch (error) {
        console.log(error);
        showAlert('error', error)        
    }
}