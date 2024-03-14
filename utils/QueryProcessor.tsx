export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("andrew id")) {
    return (
      "My andrew ID is 'yourmum'."
    );
  }
  else if (query.toLowerCase().includes("name")) {
    return (
      "wcrensha"
    );
  }
  else if (query.toLowerCase().includes("plus")) {
    let plus = query.toLowerCase().indexOf("plus");
    let num1 = Number(query[plus - 1]);
    let num2 = Number(query[plus + 1]);

    return (
      String(num1 + num2)
    );
  }

  return "";
}
