run:
	deno --lock=lock.json mod.ts

lock: 
	deno --lock=lock.json --lock-write mod.ts

install:
	deno install -f deno-cli mod.ts

test: 
	deno test 

format:
	deno fmt *.ts