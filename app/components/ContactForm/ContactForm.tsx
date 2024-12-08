'use client';

import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Stack } from '@mui/material';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Обработчик изменения инпутов
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Ваше сообщение отправлено успешно!');
        setFormData({ name: '', phone: '', description: '' }); // Очистить форму
      } else {
        setErrorMessage('Произошла ошибка при отправке. Попробуйте снова.');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrorMessage('Ошибка соединения. Попробуйте снова позже.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        py: 5,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}
      >
        Свяжитесь с нами
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            name="name"
            label="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            name="phone"
            label="Ваш номер телефона"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            name="description"
            label="Описание"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? 'Отправка...' : 'Отправить'}
          </Button>
        </Stack>
      </form>

      {successMessage && (
        <Typography color="success.main" sx={{ mt: 3, textAlign: 'center' }}>
          {successMessage}
        </Typography>
      )}

      {errorMessage && (
        <Typography color="error.main" sx={{ mt: 3, textAlign: 'center' }}>
          {errorMessage}
        </Typography>
      )}
    </Container>
  );
}
