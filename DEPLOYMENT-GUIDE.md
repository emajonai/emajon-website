# Emajon Website Deployment Guide for GoDaddy

## Files to Upload

Upload all these files to your GoDaddy hosting account's `public_html` folder:

```
emajon-website/
├── index.html           # Main homepage
├── css/
│   └── styles.css      # All styling
├── js/
│   └── main.js         # Interactive functionality  
├── images/             # Empty folder ready for future images
├── assets/             # Empty folder ready for future assets
├── .htaccess          # Server configuration
├── robots.txt         # Search engine instructions
├── sitemap.xml        # Site structure for SEO
└── 404.html          # Custom error page
```

## Step-by-Step Deployment Instructions

### Step 1: Access Your GoDaddy Hosting
1. Log into your GoDaddy account
2. Go to "My Products" → "Web Hosting"
3. Click "Manage" next to your emajon.com hosting plan
4. In the hosting dashboard, click "File Manager" or use FTP/SFTP

### Step 2: Upload Files
1. Navigate to the `public_html` folder (this is your website's root)
2. Upload ALL files from the `emajon-website` folder
3. Maintain the folder structure (css/, js/, images/, assets/)

### Step 3: Set File Permissions
- Ensure `.htaccess` has 644 permissions
- Ensure all HTML files have 644 permissions  
- Ensure CSS/JS files have 644 permissions

### Step 4: Configure Domain
1. In GoDaddy Domain Manager, ensure emajon.com points to your hosting
2. Set up both www and non-www versions (choose your preference)
3. Enable SSL certificate (free with GoDaddy hosting)

### Step 5: Test Your Website
1. Visit https://emajon.com (may take up to 24 hours for DNS propagation)
2. Test all navigation links
3. Test the waitlist modal functionality
4. Test mobile responsiveness

## Post-Deployment Checklist

### ✅ Technical Verification
- [ ] Homepage loads correctly
- [ ] All CSS styles are applied
- [ ] JavaScript functionality works
- [ ] Mobile navigation menu works
- [ ] Waitlist modal opens and closes
- [ ] 404 page displays correctly
- [ ] SSL certificate is active (https://)

### ✅ SEO & Performance
- [ ] Check robots.txt is accessible: https://emajon.com/robots.txt
- [ ] Check sitemap.xml is accessible: https://emajon.com/sitemap.xml
- [ ] Test page speed with Google PageSpeed Insights
- [ ] Verify meta tags are correct
- [ ] Submit sitemap to Google Search Console

### ✅ Accessibility Testing
- [ ] Test keyboard navigation
- [ ] Check color contrast
- [ ] Verify screen reader compatibility
- [ ] Test with different browser zoom levels

## Email Setup (Optional)
To enable the hello@emajon.com email:
1. In GoDaddy, go to "Email & Office" → "Manage"
2. Create email account: hello@emajon.com
3. Set up forwarding or use webmail interface

## Analytics Setup (Future)
When ready to add analytics:
1. Set up Google Analytics 4
2. Add tracking code to main.js (look for trackEvent function)
3. Consider privacy-friendly alternatives like Plausible

## Content Updates
To update website content:
1. Edit the HTML files locally
2. Upload changed files via File Manager or FTP
3. Clear browser cache to see changes

## Backup Strategy
1. Download a copy of all files monthly
2. Export any waitlist data from localStorage
3. Keep version backups before major changes

## Troubleshooting Common Issues

### Website Not Loading
- Check DNS propagation (use whatsmydns.net)
- Verify files are in `public_html` folder
- Check file permissions

### Styles Not Applying  
- Ensure `css/styles.css` path is correct
- Clear browser cache
- Check file uploaded completely

### JavaScript Not Working
- Check browser console for errors
- Ensure `js/main.js` uploaded correctly
- Verify file permissions

### SSL Issues
- Enable SSL in GoDaddy hosting panel
- Wait 24-48 hours for certificate activation
- Force HTTPS in .htaccess (uncomment relevant lines)

## Future Enhancements

### Phase 1 (Near Term)
- Add actual email signup backend
- Implement real analytics
- Add more interactive elements
- Create blog section

### Phase 2 (Medium Term)
- Build the actual tools mentioned on site
- Add user accounts and dashboard
- Implement community features
- Mobile app considerations

### Phase 3 (Long Term)
- Full web application platform
- Advanced ADHD-focused features
- Community management tools
- Subscription/monetization features

## ADHD-Friendly Design Features Implemented

✨ **Visual Clarity**
- Clean, uncluttered design
- High contrast colors
- Readable typography (Inter font)
- Consistent spacing and layout

✨ **Navigation Simplicity**  
- Clear, predictable navigation
- Smooth scrolling between sections
- Active section highlighting
- Mobile-friendly menu

✨ **Cognitive Load Reduction**
- Single-page design (no complex navigation)
- Progressive information disclosure
- Clear call-to-action buttons
- Minimal distractions

✨ **Accessibility**
- Keyboard navigation support
- Screen reader compatibility  
- Focus management
- Motion preferences respected

## Support
For technical issues with deployment, contact GoDaddy support.
For website customizations, refer to the code comments in the files.

---
**Ready to launch your ADHD-friendly organization platform! 🚀**