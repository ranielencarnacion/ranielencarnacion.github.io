# Portfolio Deployment Helper Script
Write-Host "🚀 Portfolio Deployment Helper" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "❌ Git repository not initialized." -ForegroundColor Red
    Write-Host "Run these commands first:" -ForegroundColor Yellow
    Write-Host "git init" -ForegroundColor Cyan
    Write-Host "git add ." -ForegroundColor Cyan
    Write-Host "git commit -m 'Initial commit'" -ForegroundColor Cyan
    Write-Host "git branch -M main" -ForegroundColor Cyan
    Write-Host "git remote add origin https://github.com/yourusername/Raniel-Portfolio.git" -ForegroundColor Cyan
    Write-Host "git push -u origin main" -ForegroundColor Cyan
    exit
}

# Show current status
Write-Host "📊 Current folder analysis:" -ForegroundColor Blue
$folderSizes = Get-ChildItem -Directory | ForEach-Object { 
    $size = (Get-ChildItem $_.FullName -Recurse -File | Measure-Object -Property Length -Sum).Sum
    [PSCustomObject]@{ 
        Name = $_.Name
        "Size(MB)" = [math]::Round($size/1MB,2)
        Include = if ($_.Name -eq "node_modules" -or $_.Name -eq "dist") { "❌ Excluded" } else { "✅ Include" }
    } 
} | Sort-Object "Size(MB)" -Descending

$folderSizes | Format-Table -AutoSize

$totalSize = (Get-ChildItem -Recurse -File | Where-Object { $_.FullName -notmatch "node_modules|\.git" } | Measure-Object -Property Length -Sum).Sum
Write-Host "📦 Deployable size (without node_modules/.git): $([math]::Round($totalSize/1MB,2)) MB" -ForegroundColor Green

Write-Host ""
Write-Host "🎯 Next steps for deployment:" -ForegroundColor Yellow
Write-Host "1. Create GitHub repository named 'Raniel-Portfolio'" -ForegroundColor White
Write-Host "2. Push your code: git push origin main" -ForegroundColor White  
Write-Host "3. Enable GitHub Pages in repo settings" -ForegroundColor White
Write-Host "4. Set source to 'GitHub Actions'" -ForegroundColor White
Write-Host "5. Your site will be at: https://yourusername.github.io/Raniel-Portfolio/" -ForegroundColor White
