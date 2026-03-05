const mjml = require("mjml");
const fs = require("fs");

const input = fs.readFileSync("template.mjml", "utf8");

const { html, errors } = mjml(input, {
  validationLevel: "strict",
});

if (errors.length) {
  console.log("MJML Errors:", errors);
}

fs.writeFileSync("output.html", html);

console.log("✅ Email compiled successfully -> output.html");