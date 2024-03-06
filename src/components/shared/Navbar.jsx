import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/"><strong>Saikat 🤖</strong></Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/snippets">Snippets</Link>
        </li>
        <li>
          <Link href="/snippets/create">New Snippet</Link>
        </li>
      </ul>
    </nav>
  );
}
