run:
	deno --lock=lock.json mod.ts

lock: 
	deno --lock=lock.json --lock-write mod.ts

install:
	deno install deno-cli mod.ts --allow-read

test: 
	deno test 

format:
	deno fmt *.ts