import react from '@vitejs/plugin-react';

export default {
  plugins: [
    react()
  ],
  server: {
    // Agregar una regla para manejar correctamente los archivos .jsx
    // con el tipo MIME 'application/javascript'
    mimeTypes: {
      'text/jsx': ['js']
    }
  },
  resolve: {
    alias: {
      // Opcional: puedes agregar alias para importar archivos jsx sin la extensión .jsx
      'react': 'react', // Si tienes alguna configuración específica de alias, asegúrate de agregarla aquí también
      'react-dom': 'react-dom'
    },
    extensions: ['.js', '.jsx'] // Añade '.jsx' a las extensiones resueltas
  }
};
