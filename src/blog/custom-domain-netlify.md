---
title: Configure a Custom Domain in Netlify using GoDaddy Hosting Provider and GitHub
date: 2020-01-18T00:00:00.000Z
tags:
  - Netlify
category: Web Development
thumbnail: ""
---
Follow these steps to configure a custom domain in Netlify using GoDaddy Hosting Provider and GitHub.

<ol>
<h3><li class="blog-post-ol-li">Deploy site from GitHub account.</li></h3>

Create and log into your Netlify account. Once logged in, click the <b>New site from Git</b> button. From there, you'll be able to select GitHub as your Git provider to log in and authorize your account.

After authorization, select the desired repo you'd like to deploy on Netlify. 

As a side note, Netlify can deploy both public and private repositories for free. Woo!

<h3><li class="blog-post-ol-li">Once deployed, update DNS in GoDaddy using Netlify DNS records.</li></h3>

It will take some time for the DNS servers to update. Like, 24 hours or time. Just sit tight. Put a timer on if that makes you feel better. I admit that I did.

</ol>

<h2>Adding an HTTPS/SSL Certificate</h2>

When you configure your nameservers in GoDaddy, you (most likely) will get this error message:

<div style="margin-left: 25px">

DNS verification failed

www.yoursitename.com doesn't appear to be served by Netlify

We can’t provision a certificate until your DNS configuration is pointing at the Netlify servers and the changes have propagated.

If you’ve already changed your DNS configuration, allow up to 24 hours for the changes to be processed, or check our troubleshooting guide for some tips on what might be happening.

</div>

Don't worry ... for now. Allow at least 24 hours for propagation to complete. Propagation won’t happen as quickly as it took for your custom domain name to become active/live. For me it took about 17 hours.

If the 24 hour mark has passed since updating your nameservers in GoDaddy, then you will have to follow these <a href="_https://docs.netlify.com/domains-https/troubleshooting-tips/#certificates-and-https" class="is-gradient" rel="noopenner noreferrer">troubleshooting tips</a>, or reach out to Netlify support for further assistance.

A nice feature that Netlify provides (for free) is SSL certificate auto-renewal from Lets Encrypt. Once your SSL certificate becomes active, it will automatically renew every 3 months.

Thanks, Netlify, for being a bro.