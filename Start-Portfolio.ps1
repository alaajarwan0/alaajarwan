$runtime = 'C:\Users\HP\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
if (-not (Test-Path -LiteralPath $runtime)) { $runtime = 'python' }
& $runtime -m http.server 4173 --bind 127.0.0.1 --directory $PSScriptRoot
