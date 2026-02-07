# Shell Lab
## Summary/Purpose
The purporse of this lab is to write our own Unix shell with the purpose of reinforcing concepts seen in the book such as signalling, process control, and exceptions.
### Key Concepts
- Signal Handling
- Process Control
- Concurrency
- Signals
- How a basic shell works
## System Diagram
## Implementations
### eval
Functionality: Main routine that parses and interprets the command line
### builtin_cmd
Functionality: Recognizes and interprets the built-in commands: quit, fg, bg, and jobs
### do_bgfg
Functionality: Implements the bg and fg built-in commands
### waitfg
Functionality: Waits for a foreground job to complete
### sigchld_handler
Functionality: Catches SIGCHILD signals
### sigtstp_handler
Functionality: Catches SIGTSTP signals
### sigint_handler
Functionality: Catches SIGINT(ctrl-c) signals
### sigquit_handler
Functionality: Catches SIGQUIT(ctrl-z) signals

## Some Natural Pitfalls
## Why not just block everything?