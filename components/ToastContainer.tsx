
import React from 'react';
import { useToast } from '../hooks/useToast';
import { CheckCircle, X } from 'lucide-react';

const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-5 right-5 z-[100] space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-coffee-brown-900 text-white rounded-lg shadow-lg p-4 flex items-center gap-3 animate-fade-in-up"
        >
          <CheckCircle className="text-green-400" />
          <span>{toast.message}</span>
          <button onClick={() => removeToast(toast.id)} className="ml-auto text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>
      ))}
    </div>
  );
};

// Add keyframes for animation in a style tag or your main CSS file
// This is a simple way to do it within JSX for this demo
const styles = `
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.3s ease-out forwards;
}
`;

// A component to inject the styles
const StyleInjector = () => <style>{styles}</style>;

const ToastContainerWithStyles = () => (
    <>
        <StyleInjector />
        <ToastContainer />
    </>
)


export default ToastContainerWithStyles;
