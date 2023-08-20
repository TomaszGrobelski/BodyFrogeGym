import '../sass/style.scss'
import { initialize} from './entryBox';  // Importowanie funkcji z oddzielnego pliku
import { initHead} from './header';  // Importowanie funkcji z oddzielnego pliku
import { calculator} from './calculator';  // Importowanie funkcji z oddzielnego pliku
import { navPhone} from './/navPhone';  // Importowanie funkcji z oddzielnego pliku
import { letterTransform } from './/letterTransform';  // Importowanie funkcji z oddzielnego pliku

initHead();
initialize(); 
calculator();
navPhone();
letterTransform();

