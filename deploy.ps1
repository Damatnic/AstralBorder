# AstralBorder Deployment Script for Windows

Write-Host "🚀 AstralBorder Deployment Helper" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if GitHub CLI is installed
$ghInstalled = Get-Command gh -ErrorAction SilentlyContinue

if ($ghInstalled) {
    Write-Host "✅ GitHub CLI detected" -ForegroundColor Green
    Write-Host ""
    $createRepo = Read-Host "Would you like to create a GitHub repository? (y/n)"
    
    if ($createRepo -eq "y") {
        Write-Host "Creating GitHub repository 'AstralBorder'..." -ForegroundColor Yellow
        gh repo create AstralBorder --public --description "Borderlands 4 Legendaries Guide - Complete tier list and character builds" --source=. --push
        Write-Host "✅ Repository created and pushed!" -ForegroundColor Green
    }
} else {
    Write-Host "ℹ️  GitHub CLI not found. Please create repository manually at:" -ForegroundColor Yellow
    Write-Host "   https://github.com/new"
    Write-Host ""
    Write-Host "After creating the repo, run:"
    Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/AstralBorder.git"
    Write-Host "   git push -u origin master"
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "🎮 Next Steps:" -ForegroundColor Green
Write-Host "1. Push to GitHub (if not done)"
Write-Host "2. Visit https://vercel.com"
Write-Host "3. Import your AstralBorder repository"
Write-Host "4. Deploy!"
Write-Host ""
Write-Host "Or use Vercel CLI:" -ForegroundColor Yellow
Write-Host "   npm i -g vercel"
Write-Host "   vercel --prod"
Write-Host "==================================" -ForegroundColor Cyan

