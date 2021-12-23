export const cleanText = (str) => {
    const non_asciis = {'a': '[àáâãäå]', 'ae': 'æ', 'c': 'ç', 'e': '[èéêë]', 'i': '[ìíîï]', 'o': '[òóôõö]', 'oe': 'œ', 'u': '[ùúûűü]', 'y': '[ýÿ]'};

    let str_clean = str.replace(/[&\\#,+()$~%.'":*?<>{}/-]/g, ' ').toLowerCase();
    for (let i in non_asciis) { str_clean = str_clean.replace(new RegExp(non_asciis[i], 'g'), i); }
    str_clean = str_clean.replace(/[^a-zA-Z0-9-ñ ]/g, '');
    str_clean = str_clean.replace(/\s+/g, ' ').trim();
    return str_clean;
}