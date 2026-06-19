# pre-build-check.ps1 - 打包前检查脚本
# 检查所有 JSON 文件是否有 BOM（会导致 PostCSS/Vite 解析失败）
Write-Host "=== 打包前检查 ===" -ForegroundColor Cyan

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$bomFiles = @()

Get-ChildItem $root -Recurse -File -Filter '*.json' -ErrorAction SilentlyContinue | Where-Object {
    $_.FullName -notmatch '\\node_modules\\' -and $_.FullName -notmatch '\\out\\' -and $_.FullName -notmatch '\\dist\\' -and $_.FullName -notmatch '\\release\\'
} | ForEach-Object {
    $bytes = [System.IO.File]::ReadAllBytes($_.FullName)
    if ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
        $bomFiles += $_.FullName
        # 自动修复
        $newBytes = New-Object byte[] ($bytes.Length - 3)
        [System.Array]::Copy($bytes, 3, $newBytes, 0, $newBytes.Length)
        [System.IO.File]::WriteAllBytes($_.FullName, $newBytes)
        Write-Host "  [FIXED] BOM removed: $($_.Name)" -ForegroundColor Yellow
    }
}

if ($bomFiles.Count -eq 0) {
    Write-Host "  [OK] No BOM found in JSON files" -ForegroundColor Green
} else {
    Write-Host "  [FIXED] Removed BOM from $($bomFiles.Count) file(s)" -ForegroundColor Yellow
}

# 检查是否有 postcss.config.js 残留
$postcssFiles = Get-ChildItem $root -Recurse -File -Filter 'postcss.config.*' -ErrorAction SilentlyContinue | Where-Object {
    $_.FullName -notmatch '\\node_modules\\' -and $_.FullName -notmatch '\\out\\'
}
if ($postcssFiles) {
    Write-Host "  [WARN] Found postcss.config files (may cause build issues):" -ForegroundColor Yellow
    $postcssFiles | ForEach-Object { Write-Host "    $($_.FullName)" -ForegroundColor Yellow }
} else {
    Write-Host "  [OK] No postcss.config files found" -ForegroundColor Green
}

Write-Host "=== 检查完成 ===" -ForegroundColor Cyan
