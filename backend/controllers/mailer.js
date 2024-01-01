const nodemailer = require('nodemailer');
const SubIngredient = require('../models/subIngredient');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const checkIngredientQuantities = async () => {
  try {
    const lowQuantityIngredients = await SubIngredient.find({ qty: { $lt: threshold } });

    // console.log(lowQuantityIngredients);

    for (const ingredient of lowQuantityIngredients) {
      const emailOptions = {
        from: process.env.SMTP_MAIL,
        to: process.env.ADMIN_EMAIL, // Admin's email address
        subject: 'Ingredient Restocking Notification',
        text: `The ingredient ${ingredient.title} has fallen below the threshold. Current quantity: ${ingredient.qty}`,
      };

      // Send the email
      await transporter.sendMail(emailOptions);
    }
  } catch (error) {
    console.error('Error checking ingredient quantities:', error);
  }
};


