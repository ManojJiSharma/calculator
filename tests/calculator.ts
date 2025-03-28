import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Calculator } from "../target/types/calculator";
import { assert } from "chai";

describe("calculator", () => {
  let provider = anchor.AnchorProvider.env();
  // Configure the client to use the local cluster.
  anchor.setProvider(provider);

  let calculator = anchor.web3.Keypair.generate();
  const program = anchor.workspace.Calculator as Program<Calculator>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods
      .initialize("Welcome to Solana")
      .accounts({
        calculator: calculator.publicKey,
        user: provider.wallet.publicKey,
      })
      .signers([calculator])
      .rpc();

    let account = await program.account.calculator.fetch(calculator.publicKey);
    assert.ok(account.greeting == "Welcome to Solana");
  });

  it("Add two number", async function () {
    const tx = await program.methods
      .add(new anchor.BN(2), new anchor.BN(1))
      .accounts({
        calculator: calculator.publicKey,
        // user: provider.wallet.publicKey,
      })
      .signers([])
      .rpc();

    let account = await program.account.calculator.fetch(calculator.publicKey);
    assert.ok(account.result.eq(new anchor.BN(3)));
  });

  it("substract two number", async function () {
    const tx = await program.methods
      .sub(new anchor.BN(3), new anchor.BN(1))
      .accounts({
        calculator: calculator.publicKey,
        // user: provider.wallet.publicKey,
      })
      .signers([])
      .rpc();

    let account = await program.account.calculator.fetch(calculator.publicKey);
    assert.ok(account.result.eq(new anchor.BN(2)));
  });

  it("divide two number", async function () {
    const tx = await program.methods
      .divide(new anchor.BN(4), new anchor.BN(2))
      .accounts({
        calculator: calculator.publicKey,
        // user: provider.wallet.publicKey,
      })
      .signers([])
      .rpc();

    let account = await program.account.calculator.fetch(calculator.publicKey);
    assert.ok(account.result.eq(new anchor.BN(2)));
    assert.ok(account.remainder.eq(new anchor.BN(0)));
  });

  it("Mulitply two number", async function () {
    const tx = await program.methods
      .mult(new anchor.BN(2), new anchor.BN(3))
      .accounts({
        calculator: calculator.publicKey,
        // user: provider.wallet.publicKey,
      })
      .signers([])
      .rpc();

    let account = await program.account.calculator.fetch(calculator.publicKey);
    assert.ok(account.result.eq(new anchor.BN(6)));
  });
});
