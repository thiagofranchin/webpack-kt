export default function DotEnv() {
  document.body.innerHTML += `<p>API KEY: ${process.env.API_KEY}</p>`
}
