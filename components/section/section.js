export async function load(address) {
    const parserURL = new URL(import.meta.url);
    const parser = parserURL.pathname;
    let area = parser;
    if (parser.endsWith(".js")) {
        area = area.slice(0, -3);
    } // must have an "address" id to add it to or else.
    area += ".html";
    console.log(area);

    console.log("Loading HTML from:", area);

    // 2️⃣ Fetch the HTML content (works in browser)
    const response = await fetch(area);
    if (!response.ok) throw new Error("Failed to load HTML file");

    const areaHTML = await response.text();

    let tempArea = document.createElement('div');   // Step 2: Create a temporary container
    tempArea.innerHTML = areaHTML;      // Step 3: Set the HTML inside it


    console.log(areaHTML);

    const target = document.getElementById(address);
    if (!target) throw new Error(`No element with id "${address}"`);
    //else
    target.innerHTML = (areaHTML);
}

