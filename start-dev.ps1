Set-Location 'D:\codex\小豆万象\CherryHQ-cherry-studio\cherry-studio-1.9.9'
$env:Path = 'C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files\nodejs\;C:\Program Files\Git\cmd;C:\Users\sun\AppData\Local\Programs\Python\Python312\Scripts\;C:\Users\sun\AppData\Local\Programs\Python\Python312\;C:\Users\sun\AppData\Local\Programs\Python\Launcher\;C:\Users\sun\AppData\Local\Microsoft\WindowsApps;C:\Users\sun\AppData\Roaming\npm'
npx electron-vite dev 2>&1 | ForEach-Object { 
  $_ | Out-File -FilePath 'D:\codex\小豆万象\CherryHQ-cherry-studio\cherry-studio-1.9.9\dev_output.log' -Append
  if ($_ -match 'ready|launch|error|Error|fail') { Write-Host $_ }
}


