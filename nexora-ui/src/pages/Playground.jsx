import React, { useState } from 'react';
import { Button } from '../components/primitives/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/primitives/Card';
import { Badge } from '../components/primitives/Badge';
import { Avatar } from '../components/primitives/Avatar';
import { Spinner } from '../components/primitives/Spinner';
import { Switch } from '../components/primitives/Switch';
import { Input } from '../components/primitives/Input';
import { Textarea } from '../components/primitives/Textarea';
import { Slider } from '../components/primitives/Slider';
import { Checkbox } from '../components/primitives/Checkbox';
import { RadioGroup } from '../components/primitives/RadioGroup';
import { Progress } from '../components/primitives/Progress';
import { Skeleton } from '../components/primitives/Skeleton';
import { Alert, AlertTitle, AlertDescription } from '../components/primitives/Alert';
import { Label } from '../components/primitives/Label';
import { Kbd } from '../components/primitives/Kbd';

export default function Playground() {
  const [activeComponent, setActiveComponent] = useState('Button');
  
  // States for all components
  const [buttonProps, setButtonProps] = useState({ variant: 'primary', size: 'md', label: 'Submit Action' });
  const [cardProps, setCardProps] = useState({ title: 'Architecture', content: 'The system is designed with brutalist constraints.' });
  const [badgeProps, setBadgeProps] = useState({ variant: 'default', label: 'New Feature' });
  const [avatarProps, setAvatarProps] = useState({ src: 'https://github.com/shadcn.png', fallback: 'CN' });
  const [spinnerProps, setSpinnerProps] = useState({ size: 'md' });
  const [switchProps, setSwitchProps] = useState({ disabled: false, checked: false });
  const [inputProps, setInputProps] = useState({ placeholder: 'Enter text...', type: 'text', disabled: false });
  const [textareaProps, setTextareaProps] = useState({ placeholder: 'Type your message...', disabled: false });
  const [sliderProps, setSliderProps] = useState({ value: [50], max: 100, step: 1 });
  const [checkboxProps, setCheckboxProps] = useState({ checked: false, disabled: false, label: 'Accept Terms & Conditions' });
  const [radioProps, setRadioProps] = useState({ defaultValue: 'option1' });
  const [progressProps, setProgressProps] = useState({ value: 65, max: 100 });
  const [skeletonProps, setSkeletonProps] = useState({ type: 'card' });
  const [alertProps, setAlertProps] = useState({ variant: 'default', title: 'Information', description: 'This is an alert.' });
  const [labelProps, setLabelProps] = useState({ text: 'Username' });
  const [kbdProps, setKbdProps] = useState({ keyText: 'Ctrl' });

  const components = [
    'Button', 'Card', 'Badge', 'Avatar', 'Spinner', 'Switch', 
    'Input', 'Textarea', 'Slider', 'Checkbox', 'RadioGroup', 
    'Progress', 'Skeleton', 'Alert', 'Label', 'Kbd'
  ];

  const generateCode = () => {
    switch (activeComponent) {
      case 'Button': return `<Button variant="${buttonProps.variant}" size="${buttonProps.size}">\n  ${buttonProps.label}\n</Button>`;
      case 'Card': return `<Card>\n  <CardHeader>\n    <CardTitle>${cardProps.title}</CardTitle>\n  </CardHeader>\n  <CardContent>\n    ${cardProps.content}\n  </CardContent>\n</Card>`;
      case 'Badge': return `<Badge variant="${badgeProps.variant}">${badgeProps.label}</Badge>`;
      case 'Avatar': return `<Avatar src="${avatarProps.src}" fallback="${avatarProps.fallback}" />`;
      case 'Spinner': return `<Spinner size="${spinnerProps.size}" />`;
      case 'Switch': return `<Switch disabled={${switchProps.disabled}} />`;
      case 'Input': return `<Input type="${inputProps.type}" placeholder="${inputProps.placeholder}" disabled={${inputProps.disabled}} />`;
      case 'Textarea': return `<Textarea placeholder="${textareaProps.placeholder}" disabled={${textareaProps.disabled}} />`;
      case 'Slider': return `<Slider defaultValue={[${sliderProps.value}]} max={${sliderProps.max}} step={${sliderProps.step}} />`;
      case 'Checkbox': return `<div className="flex items-center gap-3">\n  <Checkbox id="terms" disabled={${checkboxProps.disabled}} />\n  <Label htmlFor="terms">${checkboxProps.label}</Label>\n</div>`;
      case 'RadioGroup': return `<RadioGroup \n  defaultValue="${radioProps.defaultValue}" \n  options={[\n    { label: 'Option 1', value: 'option1' },\n    { label: 'Option 2', value: 'option2' }\n  ]} \n/>`;
      case 'Progress': return `<Progress value={${progressProps.value}} max={${progressProps.max}} />`;
      case 'Skeleton': return skeletonProps.type === 'card' 
        ? `<div className="flex flex-col gap-4 w-64">\n  <Skeleton className="h-48 w-full" />\n  <Skeleton className="h-4 w-[80%]" />\n  <Skeleton className="h-4 w-[60%]" />\n</div>`
        : `<div className="flex items-center gap-4">\n  <Skeleton className="h-12 w-12 rounded-full" />\n  <div className="space-y-2">\n    <Skeleton className="h-4 w-[250px]" />\n    <Skeleton className="h-4 w-[200px]" />\n  </div>\n</div>`;
      case 'Alert': return `<Alert variant="${alertProps.variant}">\n  <AlertTitle>${alertProps.title}</AlertTitle>\n  <AlertDescription>${alertProps.description}</AlertDescription>\n</Alert>`;
      case 'Label': return `<Label>${labelProps.text}</Label>`;
      case 'Kbd': return `<span>Press <Kbd>${kbdProps.keyText}</Kbd></span>`;
      default: return `<${activeComponent} />`;
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col md:flex-row overflow-hidden border-t border-border mt-16">
      {/* Component Selector */}
      <div className="w-full md:w-64 border-r border-border bg-base-900 overflow-y-auto custom-scrollbar">
        <div className="sticky top-0 bg-base-900 z-10 p-4 border-b border-border">
          <h2 className="font-mono text-xs uppercase tracking-widest text-text-secondary">Primitives ({components.length})</h2>
        </div>
        <div className="p-4 flex flex-col gap-1 pb-12">
          {components.map(comp => (
            <button 
              key={comp}
              onClick={() => setActiveComponent(comp)}
              className={`w-full text-left px-3 py-2 text-sm ${activeComponent === comp ? 'bg-base-800 border-l-2 border-accent text-accent' : 'text-text-secondary hover:bg-base-800 border-l-2 border-transparent'}`}
            >
              {comp}
            </button>
          ))}
        </div>
      </div>

      {/* Live Canvas */}
      <div className="flex-grow bg-[#0f0f0f] relative flex flex-col items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzMzMzMzMiLz48L3N2Zz4=')]">
        <div className="absolute top-4 left-4 font-mono text-xs text-text-secondary uppercase tracking-widest bg-base-900 border border-border px-2 py-1">
          Canvas
        </div>
        
        <div className="p-12 border border-border bg-base-900/50 backdrop-blur-sm min-w-[300px] flex items-center justify-center shadow-2xl">
          {activeComponent === 'Button' && <Button variant={buttonProps.variant} size={buttonProps.size}>{buttonProps.label}</Button>}
          {activeComponent === 'Card' && (
            <Card className="w-64">
              <CardHeader><CardTitle>{cardProps.title}</CardTitle></CardHeader>
              <CardContent>{cardProps.content}</CardContent>
            </Card>
          )}
          {activeComponent === 'Badge' && <Badge variant={badgeProps.variant}>{badgeProps.label}</Badge>}
          {activeComponent === 'Avatar' && <Avatar src={avatarProps.src} fallback={avatarProps.fallback} />}
          {activeComponent === 'Spinner' && <Spinner size={spinnerProps.size} />}
          {activeComponent === 'Switch' && <Switch disabled={switchProps.disabled} checked={switchProps.checked} onCheckedChange={(v) => setSwitchProps({...switchProps, checked: v})} />}
          
          {activeComponent === 'Input' && <div className="w-64"><Input type={inputProps.type} placeholder={inputProps.placeholder} disabled={inputProps.disabled} /></div>}
          {activeComponent === 'Textarea' && <div className="w-64"><Textarea placeholder={textareaProps.placeholder} disabled={textareaProps.disabled} /></div>}
          {activeComponent === 'Slider' && <div className="w-64"><Slider value={sliderProps.value} onValueChange={(v) => setSliderProps({...sliderProps, value: v})} max={sliderProps.max} step={sliderProps.step} /></div>}
          {activeComponent === 'Checkbox' && (
            <div className="flex items-center gap-3">
              <Checkbox checked={checkboxProps.checked} onCheckedChange={(v) => setCheckboxProps({...checkboxProps, checked: v})} disabled={checkboxProps.disabled} />
              <Label>{checkboxProps.label}</Label>
            </div>
          )}
          {activeComponent === 'RadioGroup' && (
            <div className="w-48 p-4 border border-border bg-base-900">
              <RadioGroup defaultValue={radioProps.defaultValue} options={[{label: 'Option 1', value: 'option1'}, {label: 'Option 2', value: 'option2'}]} />
            </div>
          )}
          {activeComponent === 'Progress' && <div className="w-64"><Progress value={progressProps.value} max={progressProps.max} /></div>}
          {activeComponent === 'Skeleton' && skeletonProps.type === 'card' && (
            <div className="flex flex-col gap-4 w-64 p-4 border border-border bg-base-900">
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[60%]" />
            </div>
          )}
          {activeComponent === 'Skeleton' && skeletonProps.type === 'profile' && (
            <div className="flex items-center gap-4 w-64 p-4 border border-border bg-base-900">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
              </div>
            </div>
          )}
          {activeComponent === 'Alert' && (
            <div className="w-80">
              <Alert variant={alertProps.variant}>
                <AlertTitle>{alertProps.title}</AlertTitle>
                <AlertDescription>{alertProps.description}</AlertDescription>
              </Alert>
            </div>
          )}
          {activeComponent === 'Label' && <div className="p-4 bg-base-900 border border-border"><Label>{labelProps.text}</Label></div>}
          {activeComponent === 'Kbd' && <div className="text-text-secondary text-sm p-4 bg-base-900 border border-border">Press <Kbd>{kbdProps.keyText}</Kbd> to activate</div>}
        </div>
      </div>

      {/* Properties Panel */}
      <div className="w-full md:w-80 border-l border-border bg-base-900 flex flex-col">
        <div className="p-4 border-b border-border flex justify-between items-center bg-base-900 z-10 sticky top-0">
          <h2 className="font-mono text-xs uppercase tracking-widest text-text-secondary">Properties</h2>
          <button className="text-xs font-mono text-text-secondary hover:text-accent transition-colors">RESET</button>
        </div>
        
        <div className="flex-grow overflow-y-auto p-6 space-y-8 custom-scrollbar pb-12">
          
          {/* Button Props */}
          {activeComponent === 'Button' && (
            <>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Label</label>
                <input type="text" value={buttonProps.label} onChange={(e) => setButtonProps({...buttonProps, label: e.target.value})} className="w-full bg-base-800 border border-border px-3 py-2 text-sm focus:border-accent outline-none" />
              </div>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Size</label>
                <div className="flex gap-2">
                  {['sm', 'md', 'lg'].map(s => (
                    <button key={s} onClick={() => setButtonProps({...buttonProps, size: s})} className={`flex-1 py-1 text-xs uppercase border ${buttonProps.size === s ? 'border-accent text-accent' : 'border-border text-text-secondary'}`}>{s}</button>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Variant</label>
                <div className="flex flex-col gap-2">
                  {['primary', 'secondary', 'ghost'].map(v => (
                    <label key={v} className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="variant" checked={buttonProps.variant === v} onChange={() => setButtonProps({...buttonProps, variant: v})} className="accent-accent bg-base-800" />
                      <span className="text-sm">{v}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Card Props */}
          {activeComponent === 'Card' && (
            <>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Title</label>
                <input type="text" value={cardProps.title} onChange={(e) => setCardProps({...cardProps, title: e.target.value})} className="w-full bg-base-800 border border-border px-3 py-2 text-sm focus:border-accent outline-none" />
              </div>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Content</label>
                <textarea value={cardProps.content} onChange={(e) => setCardProps({...cardProps, content: e.target.value})} className="w-full bg-base-800 border border-border px-3 py-2 text-sm h-24 focus:border-accent outline-none" />
              </div>
            </>
          )}

          {/* Badge Props */}
          {activeComponent === 'Badge' && (
            <>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Label</label>
                <input type="text" value={badgeProps.label} onChange={(e) => setBadgeProps({...badgeProps, label: e.target.value})} className="w-full bg-base-800 border border-border px-3 py-2 text-sm focus:border-accent outline-none" />
              </div>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Variant</label>
                <div className="flex flex-col gap-2">
                  {['default', 'secondary', 'outline', 'destructive'].map(v => (
                    <label key={v} className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="badgeVariant" checked={badgeProps.variant === v} onChange={() => setBadgeProps({...badgeProps, variant: v})} className="accent-accent bg-base-800" />
                      <span className="text-sm capitalize">{v}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Avatar Props */}
          {activeComponent === 'Avatar' && (
            <>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Image Source</label>
                <input type="text" value={avatarProps.src} onChange={(e) => setAvatarProps({...avatarProps, src: e.target.value})} className="w-full bg-base-800 border border-border px-3 py-2 text-sm focus:border-accent outline-none" />
              </div>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Fallback Initials</label>
                <input type="text" value={avatarProps.fallback} onChange={(e) => setAvatarProps({...avatarProps, fallback: e.target.value})} maxLength={2} className="w-full bg-base-800 border border-border px-3 py-2 text-sm focus:border-accent outline-none" />
              </div>
            </>
          )}

          {/* Spinner Props */}
          {activeComponent === 'Spinner' && (
            <div className="space-y-3">
              <label className="font-mono text-xs uppercase text-text-secondary block">Size</label>
              <div className="flex gap-2">
                {['sm', 'md', 'lg'].map(s => (
                  <button key={s} onClick={() => setSpinnerProps({ size: s })} className={`flex-1 py-1 text-xs uppercase border ${spinnerProps.size === s ? 'border-accent text-accent' : 'border-border text-text-secondary'}`}>{s}</button>
                ))}
              </div>
            </div>
          )}

          {/* Switch Props */}
          {activeComponent === 'Switch' && (
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={switchProps.disabled} onChange={(e) => setSwitchProps({...switchProps, disabled: e.target.checked})} className="accent-accent" />
                <span className="text-sm">Disabled state</span>
              </label>
            </div>
          )}

          {/* Input Props */}
          {activeComponent === 'Input' && (
            <>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Type</label>
                <select value={inputProps.type} onChange={(e) => setInputProps({...inputProps, type: e.target.value})} className="w-full bg-base-800 border border-border px-3 py-2 text-sm text-text-secondary focus:border-accent outline-none">
                  <option value="text">Text</option>
                  <option value="password">Password</option>
                  <option value="email">Email</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Placeholder</label>
                <input type="text" value={inputProps.placeholder} onChange={(e) => setInputProps({...inputProps, placeholder: e.target.value})} className="w-full bg-base-800 border border-border px-3 py-2 text-sm focus:border-accent outline-none" />
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer mt-4">
                  <input type="checkbox" checked={inputProps.disabled} onChange={(e) => setInputProps({...inputProps, disabled: e.target.checked})} className="accent-accent" />
                  <span className="text-sm">Disabled state</span>
                </label>
              </div>
            </>
          )}

          {/* Textarea Props */}
          {activeComponent === 'Textarea' && (
            <>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Placeholder</label>
                <input type="text" value={textareaProps.placeholder} onChange={(e) => setTextareaProps({...textareaProps, placeholder: e.target.value})} className="w-full bg-base-800 border border-border px-3 py-2 text-sm focus:border-accent outline-none" />
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer mt-4">
                  <input type="checkbox" checked={textareaProps.disabled} onChange={(e) => setTextareaProps({...textareaProps, disabled: e.target.checked})} className="accent-accent" />
                  <span className="text-sm">Disabled state</span>
                </label>
              </div>
            </>
          )}

          {/* Slider Props */}
          {activeComponent === 'Slider' && (
            <>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Max Value ({sliderProps.max})</label>
                <input type="range" min="10" max="500" step="10" value={sliderProps.max} onChange={(e) => setSliderProps({...sliderProps, max: parseInt(e.target.value)})} className="w-full accent-accent" />
              </div>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Step ({sliderProps.step})</label>
                <input type="range" min="1" max="25" step="1" value={sliderProps.step} onChange={(e) => setSliderProps({...sliderProps, step: parseInt(e.target.value)})} className="w-full accent-accent" />
              </div>
              <div className="space-y-3 mt-4 pt-4 border-t border-border">
                <label className="font-mono text-xs uppercase text-text-secondary block">Current Value</label>
                <div className="text-xl font-mono text-text-primary">{sliderProps.value[0]}</div>
              </div>
            </>
          )}

          {/* Checkbox Props */}
          {activeComponent === 'Checkbox' && (
            <>
               <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Label Text</label>
                <input type="text" value={checkboxProps.label} onChange={(e) => setCheckboxProps({...checkboxProps, label: e.target.value})} className="w-full bg-base-800 border border-border px-3 py-2 text-sm focus:border-accent outline-none" />
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer mt-4">
                  <input type="checkbox" checked={checkboxProps.disabled} onChange={(e) => setCheckboxProps({...checkboxProps, disabled: e.target.checked})} className="accent-accent" />
                  <span className="text-sm">Disabled state</span>
                </label>
              </div>
            </>
          )}

          {/* RadioGroup Props */}
          {activeComponent === 'RadioGroup' && (
             <div className="space-y-3">
               <label className="font-mono text-xs uppercase text-text-secondary block">Default Selection</label>
               <select value={radioProps.defaultValue} onChange={(e) => setRadioProps({ defaultValue: e.target.value })} className="w-full bg-base-800 border border-border px-3 py-2 text-sm text-text-secondary focus:border-accent outline-none">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
               </select>
             </div>
          )}

          {/* Progress Props */}
          {activeComponent === 'Progress' && (
            <div className="space-y-3">
              <label className="font-mono text-xs uppercase text-text-secondary block">Value ({progressProps.value}%)</label>
              <input type="range" min="0" max="100" value={progressProps.value} onChange={(e) => setProgressProps({...progressProps, value: parseInt(e.target.value)})} className="w-full accent-accent" />
            </div>
          )}

          {/* Skeleton Props */}
          {activeComponent === 'Skeleton' && (
            <div className="space-y-3">
              <label className="font-mono text-xs uppercase text-text-secondary block">Preset Layout</label>
              <div className="flex gap-2">
                {['card', 'profile'].map(v => (
                  <button key={v} onClick={() => setSkeletonProps({ type: v })} className={`flex-1 py-1 text-xs uppercase border ${skeletonProps.type === v ? 'border-accent text-accent' : 'border-border text-text-secondary'}`}>{v}</button>
                ))}
              </div>
            </div>
          )}

          {/* Alert Props */}
          {activeComponent === 'Alert' && (
            <>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Title</label>
                <input type="text" value={alertProps.title} onChange={(e) => setAlertProps({...alertProps, title: e.target.value})} className="w-full bg-base-800 border border-border px-3 py-2 text-sm focus:border-accent outline-none" />
              </div>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Description</label>
                <textarea value={alertProps.description} onChange={(e) => setAlertProps({...alertProps, description: e.target.value})} className="w-full bg-base-800 border border-border px-3 py-2 text-sm h-20 focus:border-accent outline-none" />
              </div>
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase text-text-secondary block">Variant</label>
                <div className="flex flex-col gap-2">
                  {['default', 'accent', 'destructive'].map(v => (
                    <label key={v} className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="alertVariant" checked={alertProps.variant === v} onChange={() => setAlertProps({...alertProps, variant: v})} className="accent-accent bg-base-800" />
                      <span className="text-sm capitalize">{v}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Label Props */}
          {activeComponent === 'Label' && (
            <div className="space-y-3">
              <label className="font-mono text-xs uppercase text-text-secondary block">Label Text</label>
              <input type="text" value={labelProps.text} onChange={(e) => setLabelProps({...labelProps, text: e.target.value})} className="w-full bg-base-800 border border-border px-3 py-2 text-sm focus:border-accent outline-none" />
            </div>
          )}

          {/* Kbd Props */}
          {activeComponent === 'Kbd' && (
            <div className="space-y-3">
              <label className="font-mono text-xs uppercase text-text-secondary block">Key String</label>
              <input type="text" value={kbdProps.keyText} onChange={(e) => setKbdProps({...kbdProps, keyText: e.target.value})} className="w-full bg-base-800 border border-border px-3 py-2 text-sm focus:border-accent outline-none" maxLength={6} />
            </div>
          )}

        </div>

        {/* Code Output */}
        <div className="border-t border-border bg-base-900 z-10 sticky bottom-0">
          <div className="p-3 border-b border-border flex justify-between items-center bg-base-800/80 backdrop-blur">
            <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">Generated Code</span>
            <button className="text-xs font-mono text-accent hover:text-white transition-colors">COPY JSX</button>
          </div>
          <div className="p-4 max-h-48 overflow-y-auto">
            <pre className="font-mono text-[11px] text-text-secondary whitespace-pre-wrap">
              {generateCode()}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
