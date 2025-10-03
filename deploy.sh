#!/bin/bash

# AstralBorder Deployment Script

echo "🚀 AstralBorder Deployment Helper"
echo "=================================="
echo ""

# Check if GitHub CLI is installed
if command -v gh &> /dev/null
then
    echo "✅ GitHub CLI detected"
    echo ""
    echo "Would you like to create a GitHub repository? (y/n)"
    read -r create_repo
    
    if [ "$create_repo" = "y" ]; then
        echo "Creating GitHub repository 'AstralBorder'..."
        gh repo create AstralBorder --public --description "Borderlands 4 Legendaries Guide - Complete tier list and character builds" --source=. --push
        echo "✅ Repository created and pushed!"
    fi
else
    echo "ℹ️  GitHub CLI not found. Please create repository manually at:"
    echo "   https://github.com/new"
    echo ""
    echo "After creating the repo, run:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/AstralBorder.git"
    echo "   git push -u origin master"
fi

echo ""
echo "=================================="
echo "🎮 Next Steps:"
echo "1. Push to GitHub (if not done)"
echo "2. Visit https://vercel.com"
echo "3. Import your AstralBorder repository"
echo "4. Deploy!"
echo ""
echo "Or use Vercel CLI:"
echo "   npm i -g vercel"
echo "   vercel --prod"
echo "=================================="

