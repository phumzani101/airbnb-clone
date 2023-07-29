"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  isOpen = false,
  onClose,
  onSubmit,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModel, setShowModel] = useState(isOpen);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  useEffect(() => {
    setShowModel(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModel(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={showModel} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader className="justify-center">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="relative flex-auto">{body}</div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-4 w-full">
            {secondaryAction && secondaryLabel && (
              <Button
                type="submit"
                variant="outline"
                className="w-full"
                disabled={disabled}
                onClick={handleSecondaryAction}
              >
                {secondaryLabel}
              </Button>
            )}

            <Button
              type="submit"
              variant="destructive"
              className="w-full"
              disabled={disabled}
              onClick={handleSubmit}
            >
              {actionLabel}
            </Button>
          </div>
        </div>
        <DialogFooter>
          <div className="flex flex-col gap-4 w-full">{footer}</div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
