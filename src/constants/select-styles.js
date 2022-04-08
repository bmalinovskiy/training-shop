export const selectStyles = {
  container: (provided) => ({
    ...provided,
    font: `500 14px 'Spartan', sans-serif`,
  }),
  control: (provided) => ({
    ...provided,
    height: 46,
    border: 0,
    borderRadius: 0,
    boxShadow: 0,
    backgroundColor: '#F8F8F8',
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '100%',
    padding: '0px 12px',
  }),
  input: (provided) => ({
    ...provided,
    height: '100%',
    margin: 0,
    padding: 0,
  }),
  menu: (provided) => ({
    ...provided,
    margin: 0,
    marginLeft: 1,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
    margin: 0,
  }),
  indicatorSeparator: () => ({}),
};
