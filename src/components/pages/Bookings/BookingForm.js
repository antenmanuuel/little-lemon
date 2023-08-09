import { useState } from "react";
import FormField from "./FormField";

const BookingForm = ({ availableTimes, onDateChange, submitData }) => {
  const minimumDate = new Date().toISOString().split("T")[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ["Birthday", "Anniversary"];

  const invalidDateErrorMessage = "Please choose a valid date";
  const invalidTimeErrorMessage = "Please choose a validtime";
  const invalidOccasionErrorMessage = "Please choose a valid occasion";
  const invalidNumberOfGuestsErrorMessage =
    "Please enter a number between 1 and 10";

  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);

  const [numberOfGuests, setNumberOfGuests] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(occasions[0]);

  const isDateValid = () => date != "";
  const isTimeValid = () => time != "";
  const isNumberofGuestsValid = () => numberOfGuests != "";
  const isOcassionValid = () => occasion != "";

  const areAllFieldsValid = () =>
    isDateValid() &&
    isTimeValid() &&
    isNumberofGuestsValid() &&
    isOcassionValid();

  const handleDateChange = (e) => {
    setDate(e.target.value);
    onDateChange(e.target.value);
  };

  const handleTimeChange = (e) => setTime(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitData((date, time, numberOfGuests, occasion));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormField
        label="Date"
        htmlFor="booking-date"
        hasError={!isDateValid()}
        errorMessage={invalidDateErrorMessage}
      >
        <input
          type="date"
          id="booking-date"
          min={minimumDate}
          value={date}
          required={true}
          onChange={handleDateChange}
        />
      </FormField>
      <FormField
        label="Time"
        htmlFor="booking-time"
        hasError={!isTimeValid()}
        errorMessage={invalidTimeErrorMessage}
      >
        <select
          id="booking-time"
          name="booking-time"
          value={time}
          required={true}
          onChange={handleTimeChange}
        >
          {availableTimes.map((times) => (
            <option data-testid="booking-time-option" key={times}>
              {times}
            </option>
          ))}
        </select>
      </FormField>
      <FormField
        label="Number of Guests"
        htmlFor="booking-number-guests"
        hasError={!isNumberofGuestsValid()}
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input
          type="number"
          id="booking-number-guests"
          name="booking-number-guests"
          value={numberOfGuests}
          min={minimumNumberOfGuests}
          max={maximumNumberOfGuests}
          required={true}
          onChange={(e) => setNumberOfGuests(e.target.value)}
        />
      </FormField>
      <FormField
        label="Occasion"
        htmlFor="booking-occasion"
        hasError={!isOcassionValid()}
        errorMessage={invalidOccasionErrorMessage}
      >
        <select
          id="booking-occasion"
          name="booking-occasion"
          value={occasion}
          required={true}
          onChange={(e) => setOccasion(e.target.value)}
        >
          {occasions.map((occasion) => (
            <option data-testid="booking-occasion-option" key={occasion}>
              {occasion}
            </option>
          ))}
        </select>
      </FormField>
      <button
        className="button-primary"
        type="submit"
        disabled={!areAllFieldsValid()}
      >
        Make your reservation
      </button>
    </form>
  );
};
