import React, { useState } from 'react';
import { Button } from '../components/primitives/Button';
import { Input } from '../components/primitives/Input';
import { Card, CardHeader, CardTitle, CardContent } from '../components/primitives/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/primitives/Tabs';
import { Modal } from '../components/primitives/Modal';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/primitives/Accordion';
import { Badge } from '../components/primitives/Badge';
import { Switch } from '../components/primitives/Switch';
import { Alert, AlertTitle, AlertDescription } from '../components/primitives/Alert';
import { Slider } from '../components/primitives/Slider';
import { Avatar } from '../components/primitives/Avatar';
import { Progress } from '../components/primitives/Progress';
import { Separator } from '../components/primitives/Separator';
import { Textarea } from '../components/primitives/Textarea';
import { Label } from '../components/primitives/Label';
import { Checkbox } from '../components/primitives/Checkbox';
import { Skeleton } from '../components/primitives/Skeleton';
import { Spinner } from '../components/primitives/Spinner';
import { Kbd } from '../components/primitives/Kbd';
import { Code } from '../components/primitives/Code';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/primitives/Table';
import { Marquee } from '../components/primitives/Marquee';
import { Breadcrumb } from '../components/primitives/Breadcrumb';
import { Pagination } from '../components/primitives/Pagination';
import { Drawer } from '../components/primitives/Drawer';
import { Timeline } from '../components/primitives/Timeline';
import { Toast } from '../components/primitives/Toast';
import { Tooltip } from '../components/primitives/Tooltip';
import { RadioGroup } from '../components/primitives/RadioGroup';
import { MagneticButton } from '../components/primitives/MagneticButton';
import { Reveal } from '../components/primitives/Reveal';
import { Spotlight } from '../components/primitives/Spotlight';
import { FormGroup } from '../components/primitives/FormGroup';

// The new 20 components
import { ScrollArea } from '../components/primitives/ScrollArea';
import { DropdownMenu } from '../components/primitives/DropdownMenu';
import { HoverCard } from '../components/primitives/HoverCard';
import { AlertDialog } from '../components/primitives/AlertDialog';
import { Calendar } from '../components/primitives/Calendar';
import { DatePicker } from '../components/primitives/DatePicker';
import { Select } from '../components/primitives/Select';
import { Command } from '../components/primitives/Command';
import { Menubar } from '../components/primitives/Menubar';
import { NavigationMenu } from '../components/primitives/NavigationMenu';
import { Toggle } from '../components/primitives/Toggle';
import { ToggleGroup } from '../components/primitives/ToggleGroup';
import { AspectRatio } from '../components/primitives/AspectRatio';
import { Collapsible } from '../components/primitives/Collapsible';
import { Carousel } from '../components/primitives/Carousel';
import { ScrollProgress } from '../components/primitives/ScrollProgress';
import { CustomCursor } from '../components/primitives/CustomCursor';
import { ImageReveal } from '../components/primitives/ImageReveal';
import { KineticText } from '../components/primitives/KineticText';
import { ContextMenu } from '../components/primitives/ContextMenu';

const componentsList = [
  { category: 'Form', items: ['Button', 'Input', 'Textarea', 'Switch', 'Slider', 'Checkbox', 'RadioGroup', 'Label', 'FormGroup', 'Select', 'Toggle', 'ToggleGroup', 'DatePicker', 'Calendar'] },
  { category: 'Navigation', items: ['Tabs', 'Breadcrumb', 'Pagination', 'Menubar', 'NavigationMenu', 'Command'] },
  { category: 'Overlay', items: ['Modal', 'Drawer', 'AlertDialog', 'DropdownMenu', 'HoverCard', 'ContextMenu'] },
  { category: 'Content', items: ['Card', 'Accordion', 'Badge', 'Avatar', 'Separator', 'Table', 'Timeline', 'Kbd', 'Code', 'AspectRatio', 'Collapsible', 'Carousel', 'ScrollArea'] },
  { category: 'Feedback', items: ['Alert', 'Progress', 'Skeleton', 'Spinner', 'Toast', 'Tooltip'] },
  { category: 'Editorial', items: ['Marquee', 'MagneticButton', 'Reveal', 'Spotlight', 'ImageReveal', 'KineticText', 'CustomCursor', 'ScrollProgress'] }
];

export default function Components() {
  const [activeComponent, setActiveComponent] = useState('Button');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [toastVisible, setToastVisible] = useState(true);

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
      <CustomCursor />
      <ScrollProgress />
      
      <aside className="w-full md:w-64 flex-shrink-0 border-r border-border pr-6">
        <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pb-12 custom-scrollbar">
          {componentsList.map((group) => (
            <div key={group.category} className="mb-8">
              <h4 className="font-mono text-xs uppercase tracking-widest text-text-secondary mb-4">{group.category}</h4>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => setActiveComponent(item)}
                      className={`text-sm text-left w-full px-2 py-1.5 transition-colors ${
                        activeComponent === item 
                          ? 'text-accent bg-base-800 border-l-2 border-accent' 
                          : 'text-text-primary hover:text-accent hover:bg-base-800/50 border-l-2 border-transparent'
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-grow min-h-[50vh]">
        <header className="mb-12">
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-4">Component / {activeComponent}</div>
          <h1 className="font-serif text-5xl md:text-6xl text-text-primary">{activeComponent}</h1>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl font-light">
            A brutalist, accessible implementation of the {activeComponent.toLowerCase()} primitive.
          </p>
        </header>

        <section className="border border-border bg-base-900 rounded-none mb-12">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">Preview</span>
          </div>
          <div className="p-12 flex flex-col items-center justify-center min-h-[300px] bg-base-800/20 overflow-hidden relative">
            
            {/* Form */}
            {activeComponent === 'Button' && <div className="flex gap-4"><Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="ghost">Ghost</Button></div>}
            {activeComponent === 'Input' && <div className="w-full max-w-sm"><Input placeholder="Enter your email..." /></div>}
            {activeComponent === 'Textarea' && <div className="w-full max-w-sm"><Textarea placeholder="Type your message here..." /></div>}
            {activeComponent === 'Switch' && <div className="flex items-center gap-4"><Switch checked={switchChecked} onCheckedChange={setSwitchChecked} /><span className="font-mono text-xs uppercase text-text-secondary">{switchChecked ? 'Enabled' : 'Disabled'}</span></div>}
            {activeComponent === 'Slider' && <div className="w-full max-w-sm flex flex-col gap-6"><Slider value={sliderValue} onValueChange={setSliderValue} /><div className="text-center font-mono text-xs text-accent uppercase tracking-widest">Value: {sliderValue[0]}</div></div>}
            {activeComponent === 'Checkbox' && <div className="flex items-center gap-4"><Checkbox id="terms" /><Label htmlFor="terms">Accept terms and conditions</Label></div>}
            {activeComponent === 'RadioGroup' && <RadioGroup defaultValue="system" options={[{ label: 'Light Theme', value: 'light' },{ label: 'Dark Theme', value: 'dark' },{ label: 'System Theme', value: 'system' }]} />}
            {activeComponent === 'Label' && <Label>This is a brutalist label</Label>}
            {activeComponent === 'FormGroup' && <FormGroup label="Username" description="This is your public display name." className="w-full max-w-sm"><Input placeholder="johndoe" /></FormGroup>}
            {activeComponent === 'Select' && <div className="w-64"><Select options={[{label: 'Apple', value: 'apple'}, {label: 'Banana', value: 'banana'}, {label: 'Orange', value: 'orange'}]} /></div>}
            {activeComponent === 'Toggle' && <Toggle>Toggle Me</Toggle>}
            {activeComponent === 'ToggleGroup' && <ToggleGroup><Toggle>A</Toggle><Toggle>B</Toggle><Toggle>C</Toggle></ToggleGroup>}
            {activeComponent === 'DatePicker' && <DatePicker />}
            {activeComponent === 'Calendar' && <Calendar />}

            {/* Navigation */}
            {activeComponent === 'Tabs' && (
              <Tabs defaultValue="design" className="w-full max-w-md border border-border bg-base-900">
                <TabsList className="bg-base-800/50"><TabsTrigger value="design">Design</TabsTrigger><TabsTrigger value="code">Code</TabsTrigger></TabsList>
                <TabsContent value="design" className="px-6"><p className="text-sm font-light text-text-secondary">The design tab content.</p></TabsContent>
                <TabsContent value="code" className="px-6"><pre className="text-xs text-accent"><code>{'<Tabs />'}</code></pre></TabsContent>
              </Tabs>
            )}
            {activeComponent === 'Breadcrumb' && <Breadcrumb items={[{ label: 'Home', href: '#' }, { label: 'Components', href: '#' }, { label: 'Breadcrumb', active: true }]} />}
            {activeComponent === 'Pagination' && <Pagination currentPage={2} totalPages={10} />}
            {activeComponent === 'Menubar' && <Menubar items={['File', 'Edit', 'View', 'Help']} />}
            {activeComponent === 'NavigationMenu' && <NavigationMenu links={['About', 'Features', 'Pricing', 'Docs']} />}
            {activeComponent === 'Command' && <Command />}

            {/* Overlay */}
            {activeComponent === 'Modal' && (
              <div>
                <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                  <h2 className="font-serif text-3xl mb-4">Editorial Modal</h2>
                  <p className="text-text-secondary font-light text-sm mb-8">This modal uses Framer Motion spring physics.</p>
                  <div className="flex justify-end gap-4"><Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button><Button onClick={() => setIsModalOpen(false)}>Confirm</Button></div>
                </Modal>
              </div>
            )}
            {activeComponent === 'Drawer' && (
              <div>
                <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
                <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} position="right">
                  <h2 className="font-serif text-3xl mb-4 mt-8">Configuration</h2>
                  <div className="flex justify-end gap-4 mt-8"><Button onClick={() => setIsDrawerOpen(false)}>Apply</Button></div>
                </Drawer>
              </div>
            )}
            {activeComponent === 'AlertDialog' && (
              <div>
                <Button onClick={() => setIsAlertOpen(true)} variant="secondary">Open Alert Dialog</Button>
                <AlertDialog isOpen={isAlertOpen} title="Are you absolutely sure?" description="This action cannot be undone. This will permanently delete your account and remove your data from our servers." onCancel={() => setIsAlertOpen(false)} onConfirm={() => setIsAlertOpen(false)} />
              </div>
            )}
            {activeComponent === 'DropdownMenu' && (
              <DropdownMenu trigger={<Button variant="outline">Open Dropdown</Button>}>
                <div className="px-4 py-2 hover:bg-base-800 text-sm cursor-pointer">Profile</div>
                <div className="px-4 py-2 hover:bg-base-800 text-sm cursor-pointer">Billing</div>
                <div className="px-4 py-2 hover:bg-base-800 text-sm cursor-pointer">Settings</div>
              </DropdownMenu>
            )}
            {activeComponent === 'HoverCard' && (
              <HoverCard trigger={<span className="font-mono text-sm uppercase text-accent border-b border-dashed border-accent cursor-help">Hover over me</span>}>
                <div className="text-sm font-light text-text-secondary">This is a hover card. It provides detailed contextual information on hover.</div>
              </HoverCard>
            )}
            {activeComponent === 'ContextMenu' && (
              <ContextMenu trigger={<div className="border border-dashed border-text-secondary p-12 text-sm text-text-secondary cursor-context-menu">Right click / Hover here</div>}>
                <div className="px-3 py-1.5 hover:bg-base-800 text-sm cursor-pointer transition-colors">Action 1</div>
                <div className="px-3 py-1.5 hover:bg-base-800 text-sm cursor-pointer transition-colors">Action 2</div>
              </ContextMenu>
            )}

            {/* Content */}
            {activeComponent === 'Card' && <Card className="w-full max-w-md"><CardHeader><CardTitle>Architecture</CardTitle></CardHeader><CardContent>The system is designed with brutalist constraints.</CardContent></Card>}
            {activeComponent === 'Accordion' && (
              <Accordion type="single" className="w-full max-w-md">
                <AccordionItem value="item-1"><AccordionTrigger>Is it accessible?</AccordionTrigger><AccordionContent>Yes, it adheres to WAI-ARIA guidelines.</AccordionContent></AccordionItem>
                <AccordionItem value="item-2"><AccordionTrigger>Is it styled?</AccordionTrigger><AccordionContent>Yes, it uses Tailwind CSS.</AccordionContent></AccordionItem>
              </Accordion>
            )}
            {activeComponent === 'Badge' && <div className="flex gap-4"><Badge>Default</Badge><Badge variant="secondary">Secondary</Badge><Badge variant="outline">Outline</Badge><Badge variant="destructive">Error</Badge></div>}
            {activeComponent === 'Avatar' && <div className="flex gap-4"><Avatar src="https://github.com/shadcn.png" fallback="CN" /><Avatar src="" fallback="JS" /></div>}
            {activeComponent === 'Separator' && <div className="w-full max-w-sm"><div className="font-mono text-sm uppercase text-text-primary mb-4">Header</div><Separator className="my-4" /><div className="text-sm font-light text-text-secondary">Content goes below the separator line.</div></div>}
            {activeComponent === 'Table' && (
              <div className="w-full max-w-2xl border border-border"><Table><TableHeader><TableRow><TableHead>Primitive</TableHead><TableHead>Status</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell>Button</TableCell><TableCell><Badge>Ready</Badge></TableCell></TableRow></TableBody></Table></div>
            )}
            {activeComponent === 'Timeline' && <div className="w-full max-w-sm"><Timeline items={[{ date: 'V1.0.0', title: 'Initial Release', description: 'The foundation of the design system.' }, { date: 'V1.1.0', title: 'New Primitives', description: 'Added 20 new components.' }]} /></div>}
            {activeComponent === 'Kbd' && <div className="text-text-secondary text-sm">Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to search</div>}
            {activeComponent === 'Code' && <div className="text-text-secondary text-sm">Install using <Code>npm install</Code></div>}
            {activeComponent === 'AspectRatio' && <div className="w-64 border border-border p-2"><AspectRatio ratio={16/9}><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover grayscale" /></AspectRatio></div>}
            {activeComponent === 'Collapsible' && <Collapsible triggerText="More Settings" className="w-64">Here are some extra settings.</Collapsible>}
            {activeComponent === 'Carousel' && <div className="w-80"><Carousel items={['Slide 1', 'Slide 2', 'Slide 3']} /></div>}
            {activeComponent === 'ScrollArea' && <ScrollArea className="h-48 w-64 border border-border bg-base-900 p-4 text-sm text-text-secondary">Jõgeva is a small town in Estonia. It is known for being the coldest place in the country. The town is situated on the Pedja river. It has a population of around 5000 people. It is a quiet place with lots of nature around. There are forests, lakes, and fields. Jõgeva is a great place to relax and enjoy the fresh air. The winters are cold, but the summers can be quite warm and sunny.</ScrollArea>}

            {/* Feedback */}
            {activeComponent === 'Alert' && <div className="w-full max-w-md flex flex-col gap-4"><Alert><AlertTitle>Information</AlertTitle><AlertDescription>System components loaded successfully.</AlertDescription></Alert></div>}
            {activeComponent === 'Progress' && <div className="w-full max-w-md flex flex-col gap-4"><Progress value={65} max={100} /><div className="text-right font-mono text-xs text-text-secondary uppercase">Loading: 65%</div></div>}
            {activeComponent === 'Skeleton' && <div className="flex flex-col gap-4 w-full max-w-sm"><Skeleton className="h-12 w-12 rounded-full" /><div className="space-y-2"><Skeleton className="h-4 w-[250px]" /><Skeleton className="h-4 w-[200px]" /></div></div>}
            {activeComponent === 'Spinner' && <div className="flex gap-8 items-center"><Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" /></div>}
            {activeComponent === 'Toast' && (
              <div className="relative w-full h-[300px] bg-base-900 border border-dashed border-border overflow-hidden">
                <Button onClick={() => setToastVisible(!toastVisible)} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">Toggle Toast</Button>
                {toastVisible && <Toast title="Task Completed" description="Components generated." className="absolute" />}
              </div>
            )}
            {activeComponent === 'Tooltip' && <div className="mt-20"><Tooltip content="Provides extra context"><span className="border-b border-dashed border-text-secondary cursor-help">Hover over me</span></Tooltip></div>}

            {/* Editorial */}
            {activeComponent === 'Marquee' && <div className="w-full"><Marquee>NEXORA UI SYSTEM</Marquee></div>}
            {activeComponent === 'MagneticButton' && <div className="p-12"><MagneticButton>Hover Me</MagneticButton></div>}
            {activeComponent === 'Reveal' && <Reveal><h2 className="font-serif text-6xl">Revealed Text</h2></Reveal>}
            {activeComponent === 'Spotlight' && <Spotlight className="w-full max-w-md h-48 flex items-center justify-center border-border"><h3 className="font-serif text-3xl">Spotlight Effect</h3></Spotlight>}
            {activeComponent === 'ImageReveal' && <div className="w-64 aspect-[3/4]"><ImageReveal src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop" className="w-full h-full" /></div>}
            {activeComponent === 'KineticText' && <KineticText text="KINETIC" className="text-7xl font-bold tracking-tighter" />}
            {activeComponent === 'ScrollProgress' && <div className="text-sm font-mono text-text-secondary text-center">Look at the top of the browser window. Scroll progress bar is active across the site.</div>}
            {activeComponent === 'CustomCursor' && <div className="text-sm font-mono text-text-secondary text-center">Move your mouse to see the custom circle cursor follow it.</div>}

          </div>
        </section>

      </main>
    </div>
  );
}
