import moment from 'moment';

export function toggleDocumentScrollbar(hide) {
  document.body.style.overflow = hide ? 'hidden' : 'auto';
}

export const getAuthHeaderString = access_token => `Token ${access_token}`;

export function getShortUserName({ first_name = '', last_name = '', middle_name }) {
  let result = `${last_name} ${first_name.substr(0, 1)}.`;
  if (middle_name) result += ` ${middle_name.substr(0, 1)}.`;
  return result;
}

export function getFullUserName({ first_name = '', last_name = '', middle_name }) {
  return last_name + (first_name ? ` ${first_name}` : '') + (middle_name ? ` ${middle_name}` : '');
}

export function getGroupsAndItems(vacations = []) {
  const groups = [];
  const items = [];

  vacations.forEach(vacation => {
    const { employee, date_start, date_end } = vacation;
    const employeeShortName = getShortUserName(employee);

    const isSuchGroupExist = !!groups.find(group => group.id === employee.id);
    if (!isSuchGroupExist) groups.push({ id: employee.id, title: employeeShortName });

    items.push({
      name: getFullUserName(employee),
      id: vacation.id,
      group: employee.id,
      canMove: false,
      canResize: false,
      canChangeGroup: false,
      start_time: moment(date_start),
      end_time: moment(date_end).add(1, 'day'),
    });
  });

  return [groups, items];
}

export function getItems(vacations = [], group_id) {
  return vacations.map(vacation => {
    const { date_start, date_end } = vacation;
    return {
      id: vacation.id,
      group: group_id,
      canMove: false,
      canResize: false,
      canChangeGroup: false,
      start_time: moment(date_start),
      end_time: moment(date_end),
    };
  });
}

export function getBusyDays(vacations = []) {
  const busyDays = {};
  vacations.forEach(({ date_start, date_end }) => {
    const diff = moment(date_end).diff(moment(date_start), 'days');
    for (let i = 0; i < diff; i++) {
      const busyDay = moment(date_start)
        .add(i, 'days')
        .format('YYYY-MM-DD');
      if (busyDays[busyDay] !== undefined) busyDays[busyDay] += 1;
      else busyDays[busyDay] = 1;
    }
  });

  return busyDays;
}

export function colorColumns(busyDays, time_start) {
  const currentTimeStart = moment(time_start).format('YYYY-MM-DD');
  if (busyDays[currentTimeStart] >= 7) return ['red-3'];
  if (busyDays[currentTimeStart] >= 5) return ['red-2'];
  if (busyDays[currentTimeStart] >= 3) return ['red-1'];
  return [];
}

export function getPlural(number, labelsArray) {
  // (2, [день, дня, дней])
  number = parseInt(number);
  if (number.toString().endsWith('1') && number !== 11) return labelsArray[0];
  else if (
    (number.toString().endsWith('2') || number.toString().endsWith('3') || number.toString().endsWith('4')) &&
    number !== 12 &&
    number !== 13 &&
    number !== 14
  ) {
    return labelsArray[1];
  } else return labelsArray[2];
}

export function getPluralDays(count) {
  return getPlural(count, ['день', 'дня', 'дней']);
}
