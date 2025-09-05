# EmailJS Setup Guide

To enable the contact form to send emails to `info.representu@gmail.com`, you need to set up EmailJS:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail" as your email provider
4. Follow the prompts to connect your Gmail account (`info.representu@gmail.com`)
5. Note down the **Service ID** (e.g., `service_xxxxxxx`)

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})
Organization: {{organization}}

Services of Interest: {{services}}

Message:
{{message}}

---
This message was sent from the RepresentU website contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xxxxxxx`)

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`)

## 5. Update Contact Form
Replace the placeholder values in `/src/components/Contact.tsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual Public Key
```

## 6. Test the Form
1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Submit and check if you receive the email at `info.representu@gmail.com`

## EmailJS Free Tier Limits
- 200 emails per month
- 2 email services
- 2 email templates
- Perfect for most small business websites

## Troubleshooting
- Make sure all IDs are correct (no extra spaces or quotes)
- Check browser console for any error messages
- Verify your Gmail account is properly connected in EmailJS
- Test with a simple message first
