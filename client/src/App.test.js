import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import UserRegistration from './components/UserRegistration';


//Ensures form is rendered
test('renders registration form', () => {
  render(<UserRegistration />);
  const nameLabel = screen.getByText(/Full Name/i);
  const emailLabel = screen.getByText(/Email/i);
  const passwordLabel = screen.getByText(/Password/i);
  const submitButton = screen.getByText(/Submit/i);

  expect(nameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});


// Ensures form is usable
test('form can be filled and submitted', async () => {
  render(<UserRegistration />);
  const nameInput = screen.getByPlaceholderText(/Full Name/i);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  const submitButton = screen.getByText(/Submit/i);

  fireEvent.change(nameInput, { target: { value: 'test' } });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'test123' } });

  fireEvent.click(submitButton);
});