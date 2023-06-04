// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).
//Создаем таблицу
const $app = document.getElementById('app'),
    $table = document.createElement('table'), //создание таблицы
    $tableHead = document.createElement('thead'), //шапка таблицы
    $tableBody = document.createElement('tbody'), //основная часть таблицы
    $tableHeadTr = document.createElement('tr'), //создание строки в таблице
    $tableHeadThFIO = document.createElement('th'), //создание столбца в таблице
    $tableHeadThFaculty = document.createElement('th'), //создание столбца в таблице
    $tableHeadThBirth = document.createElement('th'), //создание столбца в таблице
    $tableHeadThStartDate = document.createElement('th'), //создание столбца в таблице
    $fioBtn = document.createElement('button'), //создаем кнопку
    $facultyBtn = document.createElement('button'), //создаем кнопку
    $birthBtn = document.createElement('button'), //создаем кнопку
    $startDateBtn = document.createElement('button'); //создаем кнопку

      $tableHeadThFIO.append($fioBtn); //вкладываем кнопку в заголовок таблицы
      $tableHeadThFaculty.append($facultyBtn); //вкладываем кнопку в заголовок таблицы
      $tableHeadThBirth.append($birthBtn); //вкладываем кнопку в заголовок таблицы
      $tableHeadThStartDate.append($startDateBtn); //вкладываем кнопку в заголовок таблицы

$table.classList.add('table', 'table-bordered', 'border-primary'); //добавляем класс из бутстрап
$fioBtn.classList.add('btn', 'btn-outline-primary');
$facultyBtn.classList.add('btn', 'btn-outline-primary');
$birthBtn.classList.add('btn', 'btn-outline-primary');
$startDateBtn.classList.add('btn', 'btn-outline-primary');

//Добавляем текст в шапку таблицы
$fioBtn.textContent = 'Ф.И.О';
$facultyBtn.textContent = 'Факультет';
$birthBtn.textContent = 'Дата рождения (возраст)';
$startDateBtn.textContent = 'Годы обучения (курс)';

$tableHeadTr.append($tableHeadThFIO); //в строку добавляем столбик ФИО
$tableHeadTr.append($tableHeadThFaculty); //в строку добавляем столбик Факультет
$tableHeadTr.append($tableHeadThBirth); //в строку добавляем столбик Дата рождения
$tableHeadTr.append($tableHeadThStartDate); //в строку добавляем столбик Начало обучения

$tableHead.append($tableHeadTr); //в строку таблицы добавляем столбики
$table.append($tableHead);
$table.append($tableBody);
$app.append($table);

$fioBtn.dataset.column = 'lastname'; //присваиваем data-атрибуты кнопке(нужны для сортировки скиска)
$facultyBtn.dataset.column = 'faculty'; //присваиваем data-атрибуты кнопке (нужны для сортировки скиска)
$birthBtn.dataset.column = 'dateOfBirth'; //присваиваем data-атрибуты кнопке (нужны для сортировки скиска)
$startDateBtn.dataset.column = 'startDate'; //присваиваем data-атрибуты кнопке (нужны для сортировки скиска)

//Создаем форму для фильтрации
const $appFormFilter = document.getElementById('add-filter'),
    $inpytFilterFIO = document.createElement('input'),
    $inpytFilteFaculty = document.createElement('input'),
    $inpytFilterStart = document.createElement('input'),
    $inpytFilterStop = document.createElement('input'),
    $filterBtn = document.createElement('button'); //создаем кнопку

    $appFormFilter.classList.add('mb-3');
    $inpytFilterFIO.classList.add('form-control', 'mb-3');
    $inpytFilteFaculty.classList.add('form-control', 'mb-3');
    $inpytFilterStart.classList.add('form-control', 'mb-3');
    $inpytFilterStop.classList.add('form-control', 'mb-3');
    $filterBtn.classList.add('btn', 'btn-primary');

    $inpytFilterFIO.placeholder = 'Фамилия Имя Отчество';
    $inpytFilteFaculty.placeholder = 'Факультет';
    $inpytFilterStart.placeholder = 'Год начала обучения';
    $inpytFilterStop.placeholder = 'Год окончания обучения';

    $inpytFilterFIO.type = 'text';
    $inpytFilteFaculty.type = 'text';
    $inpytFilterStart.type = 'number';
    $inpytFilterStop.type = 'number';
    $filterBtn.type = 'submit';

    $filterBtn.textContent = 'Найти';

    $appFormFilter.append($inpytFilterFIO, $inpytFilteFaculty, $inpytFilterStart, $inpytFilterStop, $filterBtn);

//Создаем форму для добавления
const $appFormUser = document.getElementById('add-form'),
    $inputLastname = document.createElement('input'),
    $inputName = document.createElement('input'),
    $inputSurename = document.createElement('input'),
    $inputBirth = document.createElement('input'),
    $inputFaculty = document.createElement('input'),
    $inputStartDate = document.createElement('input'),
    $buttonUser = document.createElement('button');

$appFormUser.classList.add('mb-3');
$inputLastname.classList.add('form-control', 'mb-3');
$inputName.classList.add('form-control', 'mb-3');
$inputSurename.classList.add('form-control', 'mb-3');
$inputFaculty.classList.add('form-control', 'mb-3');
$inputBirth.classList.add('form-control', 'mb-3');
$inputStartDate.classList.add('form-control', 'mb-3');
$buttonUser.classList.add('btn', 'btn-primary');

$inputBirth.min = '1900-01-01'; //минимальное значение даты рождения

$inputLastname.placeholder = 'Фамилия';
$inputName.placeholder = 'Имя';
$inputSurename.placeholder = 'Отчество';
$inputFaculty.placeholder = 'Факультет';
$inputBirth.placeholder = 'Дата рождения';
$inputStartDate.placeholder = 'Дата поступления';

$inputLastname.type = 'text';
$inputName.type = 'text';
$inputSurename.type = 'text';
$inputFaculty.type = 'text';
$inputBirth.type = 'date';
$inputStartDate.type = 'number';

$buttonUser.textContent = 'Добавить';

$inputLastname.id = 'lastname-inp';
$inputName.id = 'name-inp';
$inputSurename.id = 'surname-inp';
$inputFaculty.id = 'faculty-inp';
$inputBirth.id = 'birth-inp';
$inputStartDate.id = 'start-inp';

$appFormUser.append($inputLastname, $inputName, $inputSurename, $inputBirth, $inputFaculty, $inputStartDate, $buttonUser);

// Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.

const studentsList = [
  {
    lastname: 'Макаров',
    name: 'Евгений',
    surename: 'Викторович',
    dateOfBirth: new Date ('01.02.1987'),
    startDate: 2006,
    faculty: 'Строительный',
  },

  {
    lastname: 'Вертинская',
    name: 'Ольга',
    surename: 'Александровна',
    dateOfBirth: new Date ('12.12.1995'),
    startDate: 2010,
    faculty: 'Автотракторный',
  },

  {
    lastname: 'Писаревский',
    name: 'Якуб',
    surename: 'Павлович',
    dateOfBirth: new Date ('09.10.1989'),
    startDate: 2022,
    faculty: 'Информационных технологий',
  },

  {
    lastname: 'Аксёнова',
    name: 'Кристина',
    surename: 'Валентиновна',
    dateOfBirth: new Date ('09.10.1990'),
    startDate: 2019,
    faculty: 'Приборо-строительный',
  },

  {
    lastname: 'Янчевский',
    name: 'Дмитрий',
    surename: 'Петрович',
    dateOfBirth: new Date ('09.10.2000'),
    startDate: 2020,
    faculty: 'Лингвистический',
  },
];

function formatDate(date) { //функция форматирования даты в день-месяц-год

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}


function getYearsStudy(startDate) { //функция подсчета года окончания учёбы(+4года учебы) и форма вывода в нужном формате. Если сентябрь года окончания обучения уже прошёл, в скобках вместо указания курса должно выводиться «закончил».
  const studyEnd = Number(startDate) + 4;
  const month = new Date().getMonth();
  const graduated = 'закончил';
  let cours = null;

  if (studyEnd > new Date().getFullYear()) {
    cours = month < 9 ? new Date().getFullYear() - startDate : (new Date().getFullYear() - startDate) + 1;
  } else if (studyEnd === new Date().getFullYear()) {
    cours = month < 9 ? new Date().getFullYear() - startDate : graduated;
  } else {
    cours = graduated;
  }

  if (typeof(cours) === 'number') {
    cours += ' курс';
  }

  return startDate + '-' + studyEnd + ' ' + '(' + cours + ')';
}


function getAge(oneUser) { //функчия получения возраста
  const today = new Date();
  let age = today.getFullYear() - oneUser.dateOfBirth.getFullYear();
  let m = today.getMonth() - oneUser.dateOfBirth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < oneUser.dateOfBirth())) {
    age--;
  }
  return '(' + age + ')';
}

// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент с информацией и пользователе.У функции должен быть один аргумент - объект студента.

function $getStudentItem(oneUser) {
  const $userTr = document.createElement('tr'), //создание строки в таблице
      $userFIO = document.createElement('th'), //создание столбца в таблице
      $userFaculty = document.createElement('th'), //создание столбца в таблице
      $userBirth = document.createElement('th'), //создание столбца в таблице
      $userStartDate = document.createElement('th'); //создание столбца в таблице

//Добавляем текст в таблицы
  $userFIO.textContent = `${oneUser.lastname} ${oneUser.name} ${oneUser.surename}`; //совмещаем ФИО в одну колонку
  $userFaculty.textContent = oneUser.faculty; //текст факультета
  $userBirth.textContent = `${formatDate(oneUser.dateOfBirth)} ${(getAge(oneUser))}`; //помещаем красивую дату через функцию formatDate
  $userStartDate.textContent = `${getYearsStudy(oneUser.startDate)}`; //текст дата поступления и курс учебы

  $userTr.append($userFIO, $userFaculty, $userBirth, $userStartDate); //в строку добавляем столбики

  return $userTr; //возвращаем строку с данными из объекта
}

// Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.
let column = 'lastname', //устанавливаем сортировку по умолчанию
    columnDir = false; //устанавливаем направление сортировки по умолчанию

function renderStudentsTable(studentsArray) { //функция отрисовки всех студентов
    let copystudentsArray = [...studentsArray];//создаем копию массива со студентами

    //функция сортировки
    function getSotrStudents (prop, dir = false) { //prop - свойство объекта по которому будем сортировать, например name
      return copystudentsArray.sort((studentsA, studentsB) => (!dir ? studentsA[prop] < studentsB[prop] : studentsA[prop] > studentsB[prop]) ? -1 : 1);
    }
    copystudentsArray = getSotrStudents (column, columnDir);

    //ФИЛЬТРАЦИЯ
    const $filterFIOValue = $inpytFilterFIO.value,
        $filteFacultyValue = $inpytFilteFaculty.value,
        $filterStartValue = $inpytFilterStart.value,
        $filterStopValue = $inpytFilterStop.value;

    if($filterFIOValue !== '')copystudentsArray = getFilterStudents(copystudentsArray, 'fio', $filterFIOValue);
    if($filteFacultyValue !== '')copystudentsArray = getFilterStudents(copystudentsArray, 'faculty', $filteFacultyValue);
    if($filterStartValue !== '')copystudentsArray = getFilterStudents(copystudentsArray, 'startDate', $filterStartValue);
    if($filterStopValue !== '')copystudentsArray = getFilterStudents(copystudentsArray, 'studyEnd', $filterStopValue);

    $tableBody.innerHTML = ''; //очищаем таблицу со студентами

    for (const oneUser of copystudentsArray) { //проходимся по копии массива, oneUser- это объект с одним студентом
      oneUser.fio = `${oneUser.lastname} ${oneUser.name} ${oneUser.surename}`; //создаем новое свойство в объекте ФИО
      oneUser.studyEnd = Number(oneUser.startDate) + 4; //новое свойство Окончание года обучения
      const $newTr = $getStudentItem(oneUser); //в переменную помещаем, то что вернула функция $getStudentItem(объект со студентом)
      $tableBody.append($newTr); //полученные данные помещаем в тело таблицы
    };
}
renderStudentsTable(studentsList); //запускаем функцию с массивом студентов

// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.
$appFormUser.addEventListener('submit', function(event) { //При отправке формы
  event.preventDefault(); //event отменяет перезагрузку страницы

  //Валидация формы
  if ($inputLastname.value.trim() === '') {
    alert ('Введите фамилию!');
    return
  }

  if ($inputName.value.trim() === '') {
    alert ('Введите имя!');
    return
  }

  if ($inputSurename.value.trim() === '') {
    alert ('Введите отчество!');
    return
  }

  if ($inputBirth.value.trim() === '') {
    alert ('Введите дату рождения!');
    return
  }

  if ($inputStartDate.value.trim() === '') {
    alert ('Введите дату начала обучения!');
    return
  }

  if ($inputFaculty.value.trim() === '') {
    alert ('Введите факультет!');
    return
  }

  let newStudentObj = { //Собираем все данные из формы нового студента в один объект
    lastname: $inputLastname.value.trim(), //trim()-убирает пробел в начале и в конце строчки
    name: $inputName.value.trim(),
    surename: $inputSurename.value.trim(),
    dateOfBirth: new Date ($inputBirth.value.trim()),
    startDate: $inputStartDate.value.trim(),
    faculty: $inputFaculty.value.trim(),
  }

  studentsList.push(newStudentObj); //добавляем новый объект со студентом в существующий массив со студентами
  renderStudentsTable(studentsList); //отрисовываем таблицу
  $appFormUser.reset();//очищает форму
})

// Этап 6. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.
const $btnHead = $tableHeadTr.querySelectorAll('button'); //получаем кнопки из шапки для сортировки

$btnHead.forEach (function (element) { //проходимся по полученным кнопкам циклом forEach
  element.addEventListener('click', function() { //каждой кнопке привязываем событие клик
    column = this.dataset.column; //меняем параметр column при клике
    columnDir = !columnDir; //меняем напраавление сортировки на противоположное
    renderStudentsTable(studentsList);
  })
});

// Этап 7. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
function getFilterStudents (arr, prop, value) {
  let result = [],
    copyResult = [...arr];
  for (const item of copyResult) {
    if (String(item[prop]).includes(value) == true)result.push(item);
  }
  return result;
}

$appFormFilter.addEventListener('submit', function(event) { //При отправке формы
  event.preventDefault(); //event отменяет перезагрузку страницы

  renderStudentsTable(studentsList);
});

//функция для установки минимального года начала обучения
function checkYearAdmission() {
  $inputStartDate.addEventListener('input', function () {
    for (let i = 0; i < $inputStartDate.value.length; i++) {
      if ($inputStartDate.value[0] < 2 || $inputStartDate.value[1] > 0 || $inputStartDate.value[0] >= 3) {
        $inputStartDate.value = '';
        alert ('Год начала обучения находится в диапазоне от 2000-го до текущего года');
      }
    }
  });
  return $inputStartDate;
}
checkYearAdmission();
