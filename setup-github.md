# Push to GitHub - Setup Instructions

## Step 1: Install Git (if not already installed)

If Git is not installed, download and install it from:
https://git-scm.com/download/win

Or use winget:
```powershell
winget install --id Git.Git -e --source winget
```

After installation, **restart your terminal/PowerShell** to refresh PATH.

## Step 2: Configure Git (if first time)

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 3: Create a GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `elika-information-security-technologies` (or your preferred name)
4. Description: "Elika Information and Security Technologies - Portfolio Website"
5. Choose Public or Private
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 4: Add Remote and Push

Navigate to your project directory:
```powershell
cd E:\datasets\elika-portfolio-website--main\elika-portfolio-website--main
```

Then run these commands (replace `YOUR_USERNAME` with your GitHub username):

```powershell
# Check git status
git status

# Add all files
git add .

# Commit changes (if any new changes)
git commit -m "Update: Clean version - Elika Information and Security Technologies"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/elika-information-security-technologies.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Alternative: Using SSH (if you have SSH keys set up)

```powershell
git remote add origin git@github.com:YOUR_USERNAME/elika-information-security-technologies.git
git push -u origin main
```

## Troubleshooting

- If you get authentication errors, you may need to use a Personal Access Token instead of password
- Generate token at: https://github.com/settings/tokens
- Use the token as your password when pushing

