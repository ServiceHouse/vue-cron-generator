export const cases = [
    {
      label: 'Elke seconde',
      value: '* * * * * ?'
    },
    {
      label: 'Elke 30 minuten',
      value: '0 */30 * * * ?'
    },
    {
      label: 'Elk uur op minuten 15, 30 en 45',
      value: '0 15,30,45 * * * ?'
    },
    {
      label: 'Elk even uur',
      value: '0 0 0/2 * * ?'
    },
    {
      label: 'Elk oneven uur',
      value: '0 0 1/2 * * ?'
    },
    {
      label: 'Elke dag om middernacht - 24 uur',
      value: '0 0 0 * * ?'
    },
    {
      label: 'Elke dag middags - 12 uur',
      value: '0 0 12 * * ?'
    },
    {
      label: 'Elke maandag om 12.00 uur',
      value: '0 0 12 * * MON'
    },
    {
      label: 'Elke weekdag om 12.00 uur',
      value: '0 0 12 * * MON-FRI'
    },
    {
      label: 'Elke 4 dagen starend op de 1e van de maand, om 12.00 uur',
      value: '0 0 12 1/4 * ?'
    },
    {
      label: 'Elke maand op de laatste dag van de maand, om 12.00 uur',
      value: '0 0 12 L * ?'
    },
    {
      label: 'Elke maand op de voorlaatste dag van de maand, om 12.00 uur',
      value: '0 0 12 L-2 * ?'
    },
    {
      label: 'Elke maand op de laatste weekdag, om 12.00 uur',
      value: '0 0 12 LW * ?'
    },
    {
      label: 'Elke maand op de weekdag die het dichtst bij de eerste van de maand ligt, om 12.00 uur',
      value: '0 0 12 1W * ?'
    },
    {
      label: 'Elke maand op de laatste zondag om 12.00 uur',
      value: '0 0 12 ? * 1L'
    },
    {
      label: 'Elke maand op de eerste vrijdag van de maand, om 12.00 uur',
      value: '0 0 12 ? * 6#1'
    },
    {
      label: 'In januari en juni elke dag om 12.00 uur',
      value: '0 0 12 * JAN,JUN ?'
    }
  ],
  daysOfWeek = [
    {
      label: 'Zondag',
      value: 1
    },
    {
      label: 'Maandag',
      value: 2
    },
    {
      label: 'Dinsdag',
      value: 3
    },
    {
      label: 'Woensdag',
      value: 4
    },
    {
      label: 'Donderdag',
      value: 5
    },
    {
      label: 'Vrijdag',
      value: 6
    },
    {
      label: 'Zaterdag',
      value: 7
    }
  ]
