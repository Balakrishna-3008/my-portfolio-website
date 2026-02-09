# Netlify Deployment Instructions

Your project is now fully configured for Netlify! Follow these steps to deploy it live.

## Step 1: Push Changes (Already Done!)
I've already pushed the necessary configuration (`netlify.toml`) to your GitHub repository.

## Step 2: Deploy on Netlify

1.  Go to [https://app.netlify.com/start](https://app.netlify.com/start) and sign in.
2.  Select **"Import from Git"**.
3.  Choose **"GitHub"** (authorize Netlify if prompted).
4.  Search for your repository: `my-portfolio-website`.
5.  Select the repository.

Netlify will automatically detect the settings from the configuration file I added:
*   **Build command:** `npm run build`
*   **Publish directory:** `dist`

6.  Click **"Deploy site"**.

Wait a few seconds, and your site will be live! Netlify will provide a URL (like `inquisitive-feynman-12345.netlify.app`).

## Customizing Your Domain
Once deployed, click on **"Domain settings"** in your site dashboard to add a custom domain if you have one, or change the generic Netlify subdomain.
