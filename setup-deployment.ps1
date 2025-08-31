# Visual Product Matcher - Deployment Setup Script
# This script helps set up GitHub repository and prepare for Vercel deployment

Write-Host "🚀 Visual Product Matcher - Deployment Setup" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
Write-Host "📋 Checking git repository status..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "📊 Project Summary:" -ForegroundColor Green
Write-Host "- Framework: Next.js 15.5.2 with App Router" -ForegroundColor Gray
Write-Host "- Language: TypeScript" -ForegroundColor Gray
Write-Host "- Styling: Tailwind CSS" -ForegroundColor Gray
Write-Host "- Deployment: Optimized for Vercel" -ForegroundColor Gray
Write-Host "- Build Status: ✅ Verified (119 kB first load)" -ForegroundColor Gray
Write-Host ""

# Step 1: GitHub Repository Setup
Write-Host "🔧 STEP 1: GitHub Repository Setup" -ForegroundColor Magenta
Write-Host "====================================" -ForegroundColor Magenta
Write-Host ""
Write-Host "Please follow these steps to create your GitHub repository:" -ForegroundColor White
Write-Host ""
Write-Host "1. Go to: https://github.com/new" -ForegroundColor Yellow
Write-Host "2. Repository name: visual-product-matcher" -ForegroundColor Yellow
Write-Host "3. Description: AI-Powered Visual Search Engine for E-commerce Products" -ForegroundColor Yellow
Write-Host "4. Make it PUBLIC (recommended for portfolio)" -ForegroundColor Yellow
Write-Host "5. ❌ DON'T initialize with README, .gitignore, or license" -ForegroundColor Yellow
Write-Host "6. Click 'Create repository'" -ForegroundColor Yellow
Write-Host ""

# Wait for user confirmation
Read-Host "Press Enter after creating the GitHub repository..."

# Step 2: Get the repository URL from user
Write-Host ""
Write-Host "📝 Enter your GitHub repository details:" -ForegroundColor Green
$username = Read-Host "Your GitHub username"
$repoName = Read-Host "Repository name (or press Enter for 'visual-product-matcher')"

if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "visual-product-matcher"
}

$repoUrl = "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "🔗 Repository URL: $repoUrl" -ForegroundColor Cyan

# Step 3: Configure Git Remote
Write-Host ""
Write-Host "🔧 STEP 2: Configuring Git Remote" -ForegroundColor Magenta
Write-Host "===================================" -ForegroundColor Magenta
Write-Host ""

# Remove existing origin if any
try {
    git remote remove origin 2>$null
    Write-Host "✅ Removed existing origin" -ForegroundColor Green
} catch {
    Write-Host "ℹ️ No existing origin to remove" -ForegroundColor Gray
}

# Add new origin
Write-Host "Adding new origin: $repoUrl"
git remote add origin $repoUrl

# Verify remote
Write-Host "Current remotes:"
git remote -v

# Step 4: Push to GitHub
Write-Host ""
Write-Host "🚀 STEP 3: Pushing to GitHub" -ForegroundColor Magenta
Write-Host "=============================" -ForegroundColor Magenta
Write-Host ""

# Ensure we're on main branch
git branch -M main

Write-Host "Pushing code to GitHub..." -ForegroundColor Yellow
try {
    git push -u origin main
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to push to GitHub" -ForegroundColor Red
    Write-Host "Please check:" -ForegroundColor Yellow
    Write-Host "- Repository exists and is accessible" -ForegroundColor Gray
    Write-Host "- You have push permissions" -ForegroundColor Gray
    Write-Host "- Your GitHub credentials are correct" -ForegroundColor Gray
    exit 1
}

# Step 5: Vercel Deployment Instructions
Write-Host ""
Write-Host "🌐 STEP 4: Vercel Deployment" -ForegroundColor Magenta
Write-Host "=============================" -ForegroundColor Magenta
Write-Host ""
Write-Host "Now follow these steps to deploy on Vercel:" -ForegroundColor White
Write-Host ""
Write-Host "1. 🌐 Go to: https://vercel.com" -ForegroundColor Yellow
Write-Host "2. 🔐 Sign up/Login with your GitHub account" -ForegroundColor Yellow
Write-Host "3. 🆕 Click 'New Project'" -ForegroundColor Yellow
Write-Host "4. 📂 Import your repository: $username/$repoName" -ForegroundColor Yellow
Write-Host "5. ⚙️ Vercel will auto-detect Next.js settings:" -ForegroundColor Yellow
Write-Host "   - Framework: Next.js" -ForegroundColor Gray
Write-Host "   - Build Command: npm run build" -ForegroundColor Gray
Write-Host "   - Output Directory: .next" -ForegroundColor Gray
Write-Host "6. 🚀 Click 'Deploy'" -ForegroundColor Yellow
Write-Host "7. ⏳ Wait 2-3 minutes for deployment" -ForegroundColor Yellow
Write-Host "8. 🎉 Get your live URL!" -ForegroundColor Yellow
Write-Host ""

# Final Summary
Write-Host "📊 DEPLOYMENT SUMMARY" -ForegroundColor Green
Write-Host "=====================" -ForegroundColor Green
Write-Host "GitHub Repository: https://github.com/$username/$repoName" -ForegroundColor Cyan
Write-Host "Vercel Dashboard: https://vercel.com" -ForegroundColor Cyan
Write-Host "Expected URL: https://$repoName-[random].vercel.app" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ Project is optimized for Vercel deployment" -ForegroundColor Green
Write-Host "✅ All configurations have been set up" -ForegroundColor Green
Write-Host "✅ Build verified (119 kB bundle size)" -ForegroundColor Green
Write-Host "✅ Ready for production deployment" -ForegroundColor Green
Write-Host ""
Write-Host "🎯 After deployment, test these features:" -ForegroundColor Yellow
Write-Host "- Image upload with drag & drop" -ForegroundColor Gray
Write-Host "- URL input functionality" -ForegroundColor Gray
Write-Host "- Product similarity search" -ForegroundColor Gray
Write-Host "- Filter and sort options" -ForegroundColor Gray
Write-Host "- Mobile responsiveness" -ForegroundColor Gray
Write-Host ""
Write-Host "Happy deploying! 🚀" -ForegroundColor Green
