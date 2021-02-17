import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTarget/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTarget/HtmlReport';


//Create an instance of matchreader  and pass in something 
//the 'DataReader interface
const matchReader = new MatchReader('football.csv');
matchReader.read();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new HtmlReport()
);

summary.buildAndPrintReport(matchReader.data);
