# TUTORIAL TYPESCRIPT

## Installation

```bash
npm install -g typescript
```

## Compile to .js

```bash
tsc <filename>.ts
```

## Install Global Dependency to run in terminal

```bash
npm install -g ts-node
```

## Run Test Code Directly

```bash
ts-node <filename>.ts
```

# UTILITY TYPES

#### EXCLUDE<T, O>

```typescript
// Exclude<T, O> : Membuang bagian dari type
type partOf = "a" | "b" | "c" | "d";
type T0 = Exclude<partOf, "a" | "d">;
// type T0 = "a" | "d";
```

#### EXTRACT<T, O>

```typescript
// Extract<T, O> : Mengambil bagian bagian dari type
type ToNe = "a" | "b" | "c" | "d";
type extractFromToNe = Extract<ToNe, "a">;
// type extractFromToNe = "a";
```

#### OMIT<T, O>

```typescript
// Omit<T, O> : Menghilangkan parameter dari type/interface
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description" | "createdAt">;
/*
type TodoPreview = {
    title: string;
    completed: boolean;
}
*/
```

#### PARTIAL\<T>

```typescript
// Partial<T> : Menjadikan parameter required menjadi optional(?)
interface RequiredParameter {
  name: string;
  status: string;
}
type OptionalParameter = Partial<RequiredParameter>;
/*
type OptionalParameter = {
    name?: string;
    status?: string;
}
*/
```

#### REQUIRED\<T>

```typescript
// Required<T> : Menjadikan parameter Optional(?) menjadi Required
interface OptionalParameter {
  name?: string;
  address?: string;
}

type RequiredParameter = Required<OptionalParameter>;
/*
type RequiredParameter = {
  name: string;
  address: string;
}
*/
```

#### PICK<T, O>

```typescript
// Pick<T, O> : Mengambil paramter dari type yang sudah ada
interface WargaLokal {
  nama: string;
  alamat: string;
  noRumah: number;
  noHp: string;
  kewarganegaraan: string;
}

type WargaRtSebelah = Pick<WargaLokal, "nama" | "noRumah">;
/*
type WargaRtSebelah =  {
    nama: string;
    noRumah: string;
}
*/
```

#### READONLY\<T>

```typescript
// Readonly<T> : Tidak bisa mengubah nilai yang sudah diinisiasi
interface ToDoBro {
  title: string;
}

const obj: Readonly<ToDoBro> = {
  title: "Hello Guys!",
};
/*
obj.title = "Hello World!"; // ERROR
*/
```

#### RECORD<K, V>

```typescript
// Record<K, V> : Membuat object dengan key sebagai parameter dan value sebagai nilai dari object
interface ValueType {
  title: string;
  description: string;
}

type keyId = "www" | "xxx" | "dummy";

const namaPanggilan: Record<keyId, ValueType> = {
  www: { title: "W3C ", description: "lorem ipsum" },
  xxx: { title: "X3 Web ", description: "dolor" },
  dummy: { title: "DUMMY GUYS", description: "sir amet" },
};
```

#### EXTENDS | &

```typescript
// extends or & : Menggabungkan parameter dari 2 type atau lebih
i; // USING TYPE
type Type1 = {
  ACK: string;
  error?: string;
  ResponseCode: number;
  status?: string;
};

type GabunganType1 = Type1 & {
  data: string;
};
/*
type GabunganType1 = {
  data: string;
  ACK: string;
  error?: string;
  ResponseCode: number;
  status?: string;
};
*/

// USING INTERFACE
interface Interface1 {
  ACK: string;
  error?: string;
  ResponseCode: number;
  status?: string;
}

interface GabunganInterface1 extends Interface1 {
  data: string;
}
/*
interface GabunganInterface1 {
  data: string;
  ACK: string;
  error?: string;
  ResponseCode: number;
  status?: string;
}
*/
```
