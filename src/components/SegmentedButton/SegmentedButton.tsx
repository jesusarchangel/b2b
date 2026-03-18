import React from 'react';
import {
  ToggleButtonGroup,
  ToggleButton,
  styled,
} from '@mui/material';

export interface SegmentedButtonOption {
  value: string;
  label?: string;
  icon?: React.ReactNode;
}

export interface SegmentedButtonProps {
  options: SegmentedButtonOption[];
  value: string | null;
  onChange: (value: string | null) => void;
  size?: 'small' | 'medium' | 'large';
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: '#E5E7EB',
  padding: 4,
  borderRadius: 6,
  gap: 4,
  '& .MuiToggleButtonGroup-grouped': {
    border: 'none',
    borderRadius: '4px !important',
    color: theme.palette.text.primary,
    textTransform: 'none',
    fontWeight: theme.typography.button.fontWeight,
    '&.Mui-selected': {
      backgroundColor: '#FFFFFF',
      boxShadow: theme.shadows[1],
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: '#FFFFFF',
      },
    },
    '&:not(.Mui-selected):hover': {
      backgroundColor: 'rgba(0,0,0,0.04)',
    },
  },
}));

export const SegmentedButton: React.FC<SegmentedButtonProps> = ({
  options,
  value,
  onChange,
  size = 'large',
}) => {
  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: string | null,
  ) => {
    onChange(newValue);
  };

  return (
    <StyledToggleButtonGroup exclusive value={value} onChange={handleChange}>
      {options.map((option) => (
        <ToggleButton
          key={option.value}
          value={option.value}
          size={size}
          sx={{ px: 1.5, py: 0.5, gap: 1 }}
        >
          {option.icon}
          {option.label}
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
};

export default SegmentedButton;
