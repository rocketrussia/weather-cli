import chalk from "chalk";
import dedent from "dedent-js";

const printError = (err) => {
  console.log(`${chalk.red("ERROR")} ${err}`);
};

const printSuccess = (msg) => {
  console.log(`${chalk.green("SUCCESS")} ${msg}`);
};

const printHelp = (msg) => {
  console.log(
    dedent`${chalk.yellow("HELP")}
    No parametrs - weather output
    -c [CITY] for setup city
    -h for help output
    -t [API KEY] for save token
    ${msg}`
  );
};

const printWeather = (result, icon) => {
  console.log(
    dedent`${chalk.greenBright("WEATHER")}
        Weather in the ${result.name}
        ${icon}' ${result.weather[0].description}
        Temperature: ${result.main.temp} (feels like ${result.main.feels_like})
        Humidity: ${result.main.humidity}%
        Wind: ${result.wind.speed}`
  );
};

export { printError, printSuccess, printHelp, printWeather };
