"use client";

import { createRef, useCallback, useImperativeHandle, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, Minus, Plus, User } from "lucide-react";
import { cn } from "@/lib/utils";

type Ref = { showModal: () => void };
const ref = createRef<Ref>();
export const showModal = () => ref.current?.showModal();

const steps = [
  {
    label: "Create",
    value: 1,
  },
  {
    label: "Add Media",
    value: 2,
  },
  {
    label: "Set Goals",
    value: 3,
  },
  {
    label: "Team",
    value: 4,
  },
  {
    label: "Launch",
    value: 5,
  },
];

const Modal = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(4);

  const showModal = useCallback(() => {
    setOpen(true);
  }, []);

  useImperativeHandle(ref, () => ({ showModal }), [showModal]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton={false}
        className="p-2 bg-[#111] sm:max-w-[540px] gap-0 rounded-3xl [box-shadow:inset_0_0_4px_10px_#eee]"
      >
        <DialogHeader hidden>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-between px-4 py-4">
          <h3 className="text-2xl font-semibold text-white">
            You're almost there!
          </h3>
          <span className="size-8 bg-white rounded-full flex items-center justify-center">
            <User />
          </span>
        </div>
        <div className="bg-[#eee] rounded-2xl px-5 py-5 ">
          <p className="text-lg font-medium pl-2">Titlegress:</p>
          <div className="flex items-center space-x-3 mt-3">
            <div className="bg-white [box-shadow:0_12px_10px_#C9BEFF80] relative rounded-3xl px-3 py-3 w-1/2 flex items-center justify-between">
              <span className="font-medium text-base">Founding goal</span>
              <Plus className="size-5 text-[#333]" strokeWidth={3} />
              <span className="absolute size-4 bg-white left-[58%] -translate-x-1/2 top-[calc(100%-8px)] rotate-45"></span>
            </div>

            <div className="w-1/2 relative">
              <div className="bg-[#ddd] rounded-3xl px-3 py-3 flex items-center justify-between relative z-10">
                <span className="font-medium text-base">Stretch goal</span>
                <Plus className="size-5 text-[#333]" strokeWidth={3} />
              </div>
              {/* Box shadow mờ 10px và tụt xuống 12px (translate-y-3) giống ô Founder Goal */}
              <span className="absolute w-full inset-0 left-px rounded-3xl bg-linear-to-r from-transparent from-20% to-[#08CB00] blur-[6px]"></span>
            </div>
          </div>
          <div className="px-8 mt-8 mb-15 relative">
            <div
              className={cn(
                "relative @container",
                "after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%+44px)] after:h-9 after:rounded-[40px] after:bg-[#ddd]",
              )}
            >
              {(() => {
                const COLORS = [
                  "#6a11cb",
                  "#2575fc",
                  "#00d2ff",
                  "#22c55e",
                  "#e9e631",
                ];
                const activeColors = COLORS.slice(0, step);
                if (activeColors.length === 1)
                  activeColors.push(activeColors[0]);
                const trackGradient = `linear-gradient(90deg, ${activeColors.join(", ")})`;
                const numIntervals = Math.max(1, steps.length - 1);
                const activePortion = (step - 1) / numIntervals;

                return (
                  <>
                    <div
                      className="rounded-[40px] h-9 transition-all z-1 relative"
                      style={{
                        background: trackGradient,
                        width: `${activePortion * 100}%`,
                      }}
                    ></div>
                    {steps.map((s, index) => {
                      const isActive = step >= index + 1;

                      const bgSize = `calc(${activePortion * 100}cqw) 100%`;
                      const nodeBgPosition = `calc(22px - ${(index / numIntervals) * 100}cqw) center`;
                      const checkmarkBgPosition = `calc(14px - ${(index / numIntervals) * 100}cqw) center`;

                      const activeStyle = isActive
                        ? {
                            backgroundColor: COLORS[index],
                            backgroundRepeat: "no-repeat",
                            backgroundImage: trackGradient,
                            backgroundSize: bgSize,
                            backgroundPosition: nodeBgPosition,
                          }
                        : {};

                      return (
                        <div
                          key={s.value}
                          className={cn(
                            "size-11 absolute rounded-full top-1/2 z-1 -translate-y-1/2 flex items-center justify-center transition-all",
                          )}
                          style={{
                            ...activeStyle,
                            left: `calc(${(index / numIntervals) * 100}% - 22px)`,
                            cursor: "pointer",
                          }}
                          onClick={() => setStep(s.value)}
                        >
                          {isActive ? (
                            <>
                              <div className="size-8 bg-white rounded-full flex items-center justify-center"></div>
                              <div
                                style={{
                                  ...activeStyle,
                                  backgroundPosition: checkmarkBgPosition,
                                }}
                                className="absolute w-4 h-2.5 top-[45%] -rotate-45 left-1/2 -translate-x-1/2 -translate-y-1/2"
                              >
                                <span className="inline-block w-4 h-2.5 bg-white absolute -top-[3px] -right-[3px] rounded-r-full"></span>
                              </div>
                            </>
                          ) : (
                            <Minus
                              strokeWidth={3}
                              className="size-7 text-[#a1a1aa]"
                            />
                          )}
                          <span
                            className={cn(
                              "font-bold text-lg whitespace-nowrap absolute top-14 left-1/2 -translate-x-1/2 text-[#333]",
                              isActive ? "text-[#333]" : "text-[#999]",
                            )}
                          >
                            {s.label}
                          </span>
                        </div>
                      );
                    })}
                  </>
                );
              })()}
            </div>
          </div>

          <p className="text-center text-gray-500 font-medium mt-6">
            Tips: Use round numbers to attract backers.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
