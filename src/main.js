
window.addEventListener("load", () => {
  document.body.appendChild(
    generateTaskList("задание", "$prefix $number.", [
    {
      title: "Прочитайте текст и вставьте пропущенные слова. ",
      content:
        "Jamal <c:2> jual hant, i we <c:4> leve. Eve heiid we <c:4> ku wem kolej. Wem jame is <c:7>. We biesh vw veram dosh, i we biesh hes lisoq'n i geeho'n. Wem <c:15> numer, i we venumerzag hapel. Wem hapel is <c:7>. We biesh hes vennumer hant'n. Wem <c:15> numer. Jamal luva sehf sefam.",
      wordlist: ["luva","schatel","godo","sorater","is","tredinal u dua","tredinal u pit"]
    },
    {
      title: "Переведите словосочетания",
      content:`
      1) Тридцатьпять </br>
      2) Пять тысяч семьдесят восемь </br>
      3) Бежать </br>
      4) Красивый человек </br>
      5) Яркое солнышко </br>
      6) Тридцать два учителя </br>
      `,
    },
    {
      title: "Составь предложение из списка слов",
      content: listI(
        "ot, penje, guje, is, elku",
        "elku, garka, el, beerd, iiewer, on",
        "sefam, elku, luva, el",
        "el, beerd, ku, luva, jame, elku",
      ),
    },
    ])
  );
});
