# Create clean deployment package
Write-Host "🚀 Creating deployment package..." -ForegroundColor Green

# Create deployment directory
$deployDir = ".\Raniel-Portfolio-Deploy"
if (Test-Path $deployDir) {
    Remove-Item $deployDir -Recurse -Force
}
New-Item -ItemType Directory -Name "Raniel-Portfolio-Deploy" | Out-Null

# Copy only necessary files
Write-Host "📁 Copying source files..." -ForegroundColor Blue

# Copy main files
Copy-Item "package.json" $deployDir
Copy-Item "package-lock.json" $deployDir -ErrorAction SilentlyContinue
Copy-Item "vite.config.ts" $deployDir
Copy-Item "tailwind.config.ts" $deployDir
Copy-Item "tsconfig.json" $deployDir
Copy-Item "postcss.config.js" $deployDir
Copy-Item "components.json" $deployDir
Copy-Item "README.md" $deployDir
Copy-Item ".gitignore" $deployDir

# Copy directories (excluding node_modules, .git, dist)
Copy-Item "client" $deployDir -Recurse
Copy-Item ".github" $deployDir -Recurse

# Calculate size
$size = (Get-ChildItem $deployDir -Recurse -File | Measure-Object -Property Length -Sum).Sum
$sizeMB = [math]::Round($size/1024/1024,2)

Write-Host "✅ Deployment package created!" -ForegroundColor Green
Write-Host "📦 Package size: $sizeMB MB" -ForegroundColor Yellow
Write-Host "📁 Location: $deployDir" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎯 You can now:" -ForegroundColor Blue
Write-Host "1. Upload this folder to GitHub" -ForegroundColor White
Write-Host "2. Or deploy to Netlify/Vercel by dragging the folder" -ForegroundColor White
Write-Host "3. Or compress it to a ZIP file for sharing" -ForegroundColor White
