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
      "wcrensha."
    );
  }
  else if (query.toLowerCase().includes("plus")) {
    let q = query.split(" ");

    let plus = q.indexOf("plus");
    let num1 = Number(q[plus - 1]);

    let num2s = q[plus + 1]
    let num2 = Number(num2s.replace("?", ""));

    return (
      String(num1 + num2)
    );
  }
  else if (query.toLowerCase().includes("multiplied by")) {
    let q = query.split(" ");

    let plus = q.indexOf("by");
    let num1 = Number(q[plus - 2]);

    let num2s = q[plus + 1]
    let num2 = Number(num2s.replace("?", ""));

    return (
      String(num1 * num2)
    );
  }
  else if (query.toLowerCase().includes("to the power of")) {
    let q = query.split(" ");

    let to = q.indexOf("to");
    let num1 = Number(q[to - 1]);

    let num2s = q[to + 4]
    let num2 = Number(num2s.replace("?", ""));

    return (
      String(num1 ** num2)
    );
  }
  else if (query.toLowerCase().includes("minus")) {
    let q = query.split(" ");

    let plus = q.indexOf("minus");
    let num1 = Number(q[plus - 1]);

    let num2s = q[plus + 1]
    let num2 = Number(num2s.replace("?", ""));

    return (
      String(num1 - num2)
    );
  }
  else if (query.toLowerCase().includes("largest")) {
    let list = query.split(":")[1].split(",");
    list[2] = list[2].replace("?", "");

    let iList = list.flatMap(x => Number(x));

    return (
      String(Math.max(...iList))
    );
  }
  else if (query.toLowerCase().includes("primes")) {
    let list = query.split(":")[1].split(",");
    list[2] = list[2].replace("?", "");

    let iList = list.flatMap(x => Number(x));
    
    let v = iList[0];
    for (let i = 0; i < iList.length; i += 1) {
      let x = iList[i];
      let lim = Math.sqrt(x);
      
      for (let j = 0; j < lim; j += 1) {
        if (Math.ceil(x / j) == x / j) {
          v = x;
        }
      }
    }

    return (
      String(v)
    );
  }
  

  return "";
}
